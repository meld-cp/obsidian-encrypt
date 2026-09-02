import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import {
	decodeEncryptedCanvasWrapper,
	decryptCanvasData,
	encryptCanvasData,
	hasEncryptedCanvasMarker,
	isEncryptedCanvasWrapper,
	verifyEncryptedCanvas,
} from '../src/features/feature-canvas-encrypt/CanvasEncryptionWrapper.ts';
import type { CanvasData } from '../src/features/feature-canvas-encrypt/CanvasTypes.ts';

const canvas: CanvasData = {
	nodes: [{ id: 'n1', type: 'text', text: 'Geheimnis 🔐 äöü', custom: { future: true } }],
	edges: [{ id: 'e1', label: 'private edge' }],
	futureTopLevelProperty: ['preserved'],
};

test('encrypts and losslessly decrypts the complete Canvas payload', async () => {
	const encoded = await encryptCanvasData(canvas, 'correct horse battery staple', 'test hint');
	assert.equal(isEncryptedCanvasWrapper(encoded), true);
	assert.equal(encoded.includes('Geheimnis'), false);
	assert.equal(encoded.includes('private edge'), false);
	const wrapper = decodeEncryptedCanvasWrapper(encoded);
	assert.notEqual(wrapper, null);
	assert.deepEqual(await decryptCanvasData(wrapper!, 'correct horse battery staple'), canvas);
	assert.equal(await verifyEncryptedCanvas(encoded, 'correct horse battery staple', canvas), true);
});

test('wrong passwords do not produce Canvas data', async () => {
	const encoded = await encryptCanvasData(canvas, 'right password', 'hint');
	const wrapper = decodeEncryptedCanvasWrapper(encoded);
	assert.notEqual(wrapper, null);
	assert.equal(await decryptCanvasData(wrapper!, 'wrong password'), null);
});

test('recognizes a damaged format marker but rejects it as a writable wrapper', () => {
	const damaged = JSON.stringify({
		nodes: [], edges: [],
		meldEncryptedCanvas: { format: 'meld-encrypted-canvas', version: 999 },
	});
	assert.equal(hasEncryptedCanvasMarker(damaged), true);
	assert.equal(isEncryptedCanvasWrapper(damaged), false);
});

test('rejects corrupt authenticated ciphertext without returning partial data', async () => {
	const encoded = await encryptCanvasData(canvas, 'password', 'hint');
	const parsed = JSON.parse(encoded) as {
		meldEncryptedCanvas: { payload: { encodedData: string } };
	};
	parsed.meldEncryptedCanvas.payload.encodedData =
		parsed.meldEncryptedCanvas.payload.encodedData.slice(0, -8) + 'AAAAAAAA';
	const wrapper = decodeEncryptedCanvasWrapper(JSON.stringify(parsed));
	assert.notEqual(wrapper, null);
	assert.equal(await decryptCanvasData(wrapper!, 'password'), null);
});

for (const size of [100_000, 1_000_000, 5_000_000, 10_000_000]) {
	test(`roundtrips a ${size}-byte-class Canvas`, { timeout: 30_000 }, async () => {
		const large: CanvasData = {
			nodes: [{ id: 'large', type: 'text', text: 'X'.repeat(size) }],
			edges: [],
		};
		const started = performance.now();
		const encoded = await encryptCanvasData(large, 'performance password', '');
		const wrapper = decodeEncryptedCanvasWrapper(encoded);
		assert.notEqual(wrapper, null);
		assert.deepEqual(await decryptCanvasData(wrapper!, 'performance password'), large);
		assert.ok(performance.now() - started < 30_000);
	});
}
