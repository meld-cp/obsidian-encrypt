import { setTimeout as delay } from 'node:timers/promises';

export async function waitFor(check, { timeout = 180000, interval = 200, message = 'Timed out', signal } = {}) {
	const deadline = Date.now() + timeout;
	do {
		signal?.throwIfAborted();
		const value = await check();
		if (value) return value;
		await delay(interval, undefined, { signal });
	} while (Date.now() < deadline);
	throw new Error(message);
}

export async function findTarget(port, predicate, { alive = () => {}, ...options } = {}) {
	return waitFor(async () => {
		alive();
		let targets;
		try {
			const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1500) });
			if (!response.ok) return false;
			targets = await response.json();
		} catch { return false; }
		return targets.find(predicate);
	}, { ...options, message: 'Obsidian debugging endpoint did not become ready' });
}

export class CdpSession {
	constructor(socket, timeout = 180000) {
		this.socket = socket;
		this.timeout = timeout;
		this.nextId = 0;
		this.pending = new Map();
		socket.addEventListener('message', event => {
			const message = JSON.parse(event.data);
			const request = this.pending.get(message.id);
			if (!request) return;
			clearTimeout(request.timer);
			this.pending.delete(message.id);
			if (message.error) request.reject(new Error(message.error.message));
			else request.resolve(message.result);
		});
		const disconnected = () => {
			for (const request of this.pending.values()) {
				clearTimeout(request.timer);
				request.reject(new Error('Obsidian debugging connection closed'));
			}
			this.pending.clear();
		};
		socket.addEventListener('close', disconnected);
		socket.addEventListener('error', disconnected);
	}

	static async connect(url, { timeout = 180000, signal } = {}) {
		const socket = new WebSocket(url);
		const session = new CdpSession(socket, timeout);
		try {
			await new Promise((resolve, reject) => {
				const timer = setTimeout(() => { socket.close(); reject(new Error('Debugging connection timed out')); }, timeout);
				const cleanup = () => { clearTimeout(timer); signal?.removeEventListener('abort', aborted); };
				const aborted = () => { cleanup(); socket.close(); reject(signal.reason); };
				socket.addEventListener('open', () => { cleanup(); resolve(); }, { once: true });
				socket.addEventListener('error', () => { cleanup(); reject(new Error('Could not connect to Obsidian debugging endpoint')); }, { once: true });
				if (signal?.aborted) aborted();
				else signal?.addEventListener('abort', aborted, { once: true });
			});
			signal?.throwIfAborted();
			session.signal = signal;
			session.aborted = () => session.close();
			signal?.addEventListener('abort', session.aborted, { once: true });
			return session;
		} catch (error) { session.close(); throw error; }
	}

	send(method, params = {}) {
		const id = ++this.nextId;
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => { this.pending.delete(id); reject(new Error(`Debugging request timed out: ${method}`)); }, this.timeout);
			this.pending.set(id, { resolve, reject, timer });
			try { this.socket.send(JSON.stringify({ id, method, params })); }
			catch (error) { clearTimeout(timer); this.pending.delete(id); reject(error); }
		});
	}

	async evaluate(expression) {
		const result = await this.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true, userGesture: true });
		if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text);
		return result.result.value;
	}

	close() { this.signal?.removeEventListener('abort', this.aborted); this.socket.close(); }
}
