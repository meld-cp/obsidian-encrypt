const [expression, port = '9223'] = process.argv.slice(2);
if (!expression) {
	console.error('Usage: node tools/obsidian-cdp-eval.mjs <javascript-expression> [port]');
	process.exit(2);
}

const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const page = targets.find(target => target.type === 'page');
if (!page) throw new Error('No Obsidian page target found');

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
	socket.addEventListener('open', resolve, { once: true });
	socket.addEventListener('error', reject, { once: true });
});

const id = 1;
socket.send(JSON.stringify({
	id,
	method: 'Runtime.evaluate',
	params: { expression, awaitPromise: true, returnByValue: true },
}));

const response = await new Promise((resolve, reject) => {
	const timer = setTimeout(() => reject(new Error('CDP evaluation timed out')), 30_000);
	socket.addEventListener('message', event => {
		const message = JSON.parse(event.data);
		if (message.id !== id) return;
		clearTimeout(timer);
		resolve(message);
	});
});
socket.close();

if (response.result?.exceptionDetails) {
	console.error(JSON.stringify({ exception: response.result.exceptionDetails.text }));
	process.exit(1);
}
console.log(JSON.stringify(response.result?.result?.value ?? null));
