import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import { execSync } from 'node:child_process';
import { CryptoHelperV3 } from '../../src/services/CryptoHelperV3.ts';
import { CryptoHelper2304 } from '../../src/services/CryptoHelper2304.ts';
import { CryptoHelper } from '../../src/services/CryptoHelper.ts';
import { CryptoHelperObsolete } from '../../src/services/CryptoHelperObsolete.ts';
import { FileDataHelper, JsonFileEncoding } from '../../src/services/FileDataHelper.ts';
import {
	_PREFIX_B,
	_PREFIX_B_VISIBLE,
	_PREFIX_A,
	_PREFIX_A_VISIBLE,
	_PREFIX_C,
	_PREFIX_C_VISIBLE,
	_PREFIX_OBSOLETE,
	_PREFIX_OBSOLETE_VISIBLE,
	_SUFFIX_WITH_COMMENT,
	_SUFFIX_NO_COMMENT,
	_HINT,
} from '../../src/features/feature-inplace-encrypt/FeatureInplaceConstants.ts';

const MDENC = `node ${path.join(process.cwd(), 'tools', 'mdenc.mjs')}`;

let tmpDir: string;

beforeEach(() => {
	tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mdenc-test-'));
});

afterEach(() => {
	fs.rmSync(tmpDir, { recursive: true, force: true });
});

async function encryptInPlace(plaintext: string, password: string, version: number, withHint = false): Promise<string> {
	const ch = version === 0 ? new CryptoHelperObsolete() : version === 1 ? new CryptoHelper() : version === 2 ? new CryptoHelper2304(16, 16, 210000) : new CryptoHelperV3();
	const ciphertext = await ch.encryptToBase64(plaintext, password);

	const prefix = version === 0 ? _PREFIX_OBSOLETE : version === 1 ? _PREFIX_A : version === 2 ? _PREFIX_B : _PREFIX_C;
	const suffix = _SUFFIX_WITH_COMMENT;
	const hint = withHint ? `${_HINT}my-hint${_HINT}` : '';

	return `${prefix}${hint}${ciphertext}${suffix}`;
}

async function encryptWholeNote(plaintext: string, password: string): Promise<string> {
	const fileData = await FileDataHelper.encrypt(password, 'hint', plaintext);
	return JsonFileEncoding.encode(fileData);
}

function runMdenc(args: string, cwd: string, expectSuccess = true): { stdout: string; stderr: string; status: number } {
	try {
		const stdout = execSync(`${MDENC} ${args}`, { cwd, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
		return { stdout, stderr: '', status: 0 };
	} catch (err: unknown) {
		const e = err as { message?: string; code?: string; syscall?: string; signal?: string | null; stdout?: string; stderr?: string; status?: number | null };
		const command = `${MDENC} ${args}`;
		const details = [e.message, e.code && `code=${e.code}`, e.syscall && `syscall=${e.syscall}`, e.signal && `signal=${e.signal}`, e.stderr, e.stdout].filter(Boolean).join('\n');
		if (e.code || e.signal || typeof e.status !== 'number' || e.status === 0) {
			throw new Error(`Failed to launch or complete command: ${command}\nWorking directory: ${cwd}\n${details}`);
		}
		const result = {
			stdout: e.stdout || '',
			stderr: e.stderr || '',
			status: typeof e.status === 'number' ? e.status : 1,
		};
		if (expectSuccess) {
			throw new Error(`Command failed with exit code ${result.status}: ${command}\nWorking directory: ${cwd}\n${details}`);
		}
		return result;
	}
}

describe('mdenc CLI tool', () => {
	describe('list command', () => {
		it('should list whole-note encrypted .mdenc files', async () => {
			const dir = path.join(tmpDir, 'list-wholenote');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret content', 'pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);
			fs.writeFileSync(path.join(dir, 'plain.md'), 'not encrypted');

			const { stdout } = runMdenc('list', dir);
			expect(stdout).toContain('note.mdenc');
			expect(stdout).not.toContain('plain.md');
		});

		it('should list inplace encrypted .md files', async () => {
			const dir = path.join(tmpDir, 'list-inplace');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('secret', 'pw', 2);
			fs.writeFileSync(path.join(dir, 'encrypted.md'), `Some text ${encrypted} more text`);
			fs.writeFileSync(path.join(dir, 'plain.md'), 'just plain text');

			const { stdout } = runMdenc('list', dir);
			expect(stdout).toContain('encrypted.md');
			expect(stdout).not.toContain('plain.md');
		});

		it('should output JSON format', async () => {
			const dir = path.join(tmpDir, 'list-json');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc('list --format json', dir);
			const parsed = JSON.parse(stdout);
			expect(Array.isArray(parsed)).toBe(true);
			expect(parsed.length).toBe(1);
			expect(parsed[0].featureType).toBe('WholeNote');
			expect(parsed[0].extension).toBe('mdenc');
		});

		it('should output CSV format', async () => {
			const dir = path.join(tmpDir, 'list-csv');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc('list --format csv', dir);
			expect(stdout).toContain('feature,fullPath,relativePath,extension');
			expect(stdout).toContain('WholeNote');
		});

		it('should list .encrypted files', async () => {
			const dir = path.join(tmpDir, 'list-encrypted');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'pw');
			fs.writeFileSync(path.join(dir, 'note.encrypted'), content);

			const { stdout } = runMdenc('list', dir);
			expect(stdout).toContain('note.encrypted');
		});

		it('should handle subdirectories', async () => {
			const dir = path.join(tmpDir, 'list-subdirs');
			const subDir = path.join(dir, 'sub', 'folder');
			fs.mkdirSync(subDir, { recursive: true });

			const content = await encryptWholeNote('secret', 'pw');
			fs.writeFileSync(path.join(subDir, 'deep.mdenc'), content);

			const { stdout } = runMdenc('list', dir);
			expect(stdout).toContain('deep.mdenc');
		});

		it('should return empty for directory with no encrypted files', () => {
			const dir = path.join(tmpDir, 'list-empty');
			fs.mkdirSync(dir, { recursive: true });
			fs.writeFileSync(path.join(dir, 'readme.txt'), 'nothing here');

			const { stdout } = runMdenc('list', dir);
			expect(stdout.trim()).toBe('');
		});
	});

	describe('test command', () => {
		it('should pass for correct password on whole-note', async () => {
			const dir = path.join(tmpDir, 'test-wholenote-pass');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'correct-pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc('test --passwords correct-pw', dir);
			expect(stdout).toContain('PASSED');
			expect(stdout).not.toContain('FAILED');
		});

		it('should fail for wrong password on whole-note', async () => {
			const dir = path.join(tmpDir, 'test-wholenote-fail');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'correct-pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const result = runMdenc('test --passwords wrong-pw', dir, false);
			expect(result.status).toBe(1);
			const { stdout } = result;
			expect(stdout).toContain('FAILED');
		});

		it('should pass for correct password on inplace (version 2)', async () => {
			const dir = path.join(tmpDir, 'test-inplace-v2');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('secret', 'pw', 2);
			fs.writeFileSync(path.join(dir, 'note.md'), `Text ${encrypted} end`);

			const { stdout } = runMdenc('test --passwords pw', dir);
			expect(stdout).toContain('PASSED');
		});

		it('should pass for correct password on inplace (version 1)', async () => {
			const dir = path.join(tmpDir, 'test-inplace-v1');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('secret', 'pw', 1);
			fs.writeFileSync(path.join(dir, 'note.md'), `Text ${encrypted} end`);

			const { stdout } = runMdenc('test --passwords pw', dir);
			expect(stdout).toContain('PASSED');
		});

		it('should pass for correct password on inplace (version 0/obsolete)', async () => {
			const dir = path.join(tmpDir, 'test-inplace-v0');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('secret', 'pw', 0);
			fs.writeFileSync(path.join(dir, 'note.md'), `Text ${encrypted} end`);

			const { stdout } = runMdenc('test --passwords pw', dir);
			expect(stdout).toContain('PASSED');
		});

		it('should pass for correct password on inplace (version 3)', async () => {
			const dir = path.join(tmpDir, 'test-inplace-v3');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('secret', 'pw', 3);
			fs.writeFileSync(path.join(dir, 'note.md'), `Text ${encrypted} end`);

			const { stdout } = runMdenc('test --passwords pw', dir);
			expect(stdout).toContain('PASSED');
		});

		it.each([0, 1, 2, 3])('fails for a wrong password on inline version %i', async version => {
			const encrypted = await encryptInPlace('secret', 'correct-pw', version);
			fs.writeFileSync(path.join(tmpDir, 'note.md'), encrypted);

			const result = runMdenc('test --passwords wrong-pw another-wrong-pw', tmpDir, false);

			expect(result.status).toBe(1);
			expect(result.stdout).toContain('FAILED');
			expect(result.stdout).toContain('line 1, pos 3, unable to decrypt');
			expect(result.stdout).not.toContain('PASSED');
		});

		it('checks every block on one line, including visible markers and different passwords', async () => {
			const first = await encryptInPlace('first secret', 'first-pw', 2);
			const second = (await encryptInPlace('second secret', 'second-pw', 3))
				.replace(_PREFIX_C, _PREFIX_C_VISIBLE).replace(_SUFFIX_WITH_COMMENT, _SUFFIX_NO_COMMENT);
			fs.writeFileSync(path.join(tmpDir, 'note.md'), `${first} between ${second}`);

			const result = runMdenc('test --passwords first-pw second-pw', tmpDir);

			expect(result.status).toBe(0);
			expect(result.stdout.match(/^PASSED =>/gm)).toHaveLength(2);
			expect(result.stdout).toContain('password #1');
			expect(result.stdout).toContain('password #2');
			expect(result.stdout).not.toContain('FAILED');
		});

		it('fails if a later block on the same line cannot be decrypted', async () => {
			const good = await encryptInPlace('good secret', 'pw', 3);
			const bad = await encryptInPlace('unrecoverable secret', 'other-pw', 3);
			const content = `${good} between ${bad}`;
			fs.writeFileSync(path.join(tmpDir, 'note.md'), content);

			const result = runMdenc('test --passwords pw', tmpDir, false);

			expect(result.status).toBe(1);
			expect(result.stdout.match(/^PASSED =>/gm)).toHaveLength(1);
			expect(result.stdout.match(/^FAILED =>/gm)).toHaveLength(1);
			expect(result.stdout).toContain(`line 1, pos ${content.indexOf('🔐', good.length) + 1}, unable to decrypt`);
		});

		it('reports inline failures with the check alias and --fails while suppressing passes', async () => {
			const good = await encryptInPlace('good secret', 'pw', 3);
			const bad = await encryptInPlace('bad secret', 'other-pw', 3);
			fs.writeFileSync(path.join(tmpDir, 'note.md'), `${good} ${bad} ${good}`);

			const result = runMdenc('check --passwords pw --fails', tmpDir, false);

			expect(result.status).toBe(1);
			expect(result.stdout.match(/^FAILED =>/gm)).toHaveLength(1);
			expect(result.stdout).not.toContain('PASSED');
		});

		it('continues checking later lines after a block fails', async () => {
			const bad = await encryptInPlace('bad secret', 'other-pw', 3);
			const good = await encryptInPlace('good secret', 'pw', 3);
			fs.writeFileSync(path.join(tmpDir, 'note.md'), `${bad}\n${good}`);

			const result = runMdenc('test --passwords pw', tmpDir, false);

			expect(result.status).toBe(1);
			expect(result.stdout).toContain('line 1, pos 3, unable to decrypt');
			expect(result.stdout).toContain('line 2, pos 3, password #1');
		});

		it('reports a malformed block after a successful block on the same line', async () => {
			const good = await encryptInPlace('good secret', 'pw', 3);
			const malformed = `${_PREFIX_C}${_HINT}unfinished hint${_SUFFIX_WITH_COMMENT}`;
			fs.writeFileSync(path.join(tmpDir, 'note.md'), `${good} ${malformed}`);

			const result = runMdenc('test --passwords pw', tmpDir, false);

			expect(result.status).toBe(1);
			expect(result.stdout).toContain('PASSED');
			expect(result.stdout).toContain('FAILED');
			expect(result.stdout).toContain('cannot decrypt');
		});

		it('should test multiple passwords and use first match', async () => {
			const dir = path.join(tmpDir, 'test-multi-pw');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'second-pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc('test --passwords first-pw second-pw third-pw', dir);
			expect(stdout).toContain('PASSED');
			expect(stdout).toContain('password #2');
		});

		it('should only list fails with --fails flag', async () => {
			const dir = path.join(tmpDir, 'test-fails-only');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'correct-pw');
			fs.writeFileSync(path.join(dir, 'good.mdenc'), content);
			fs.writeFileSync(path.join(dir, 'bad.mdenc'), content);

			const result = runMdenc('test --passwords wrong-pw --fails', dir, false);
			expect(result.status).toBe(1);
			const { stdout } = result;
			expect(stdout).toContain('FAILED');
			expect(stdout).not.toContain('PASSED');
		});

		it('should handle inplace with hint', async () => {
			const dir = path.join(tmpDir, 'test-inplace-hint');
			fs.mkdirSync(dir, { recursive: true });

			const ch = new CryptoHelper2304(16, 16, 210000);
			const ciphertext = await ch.encryptToBase64('secret', 'pw');
			const content = `${_PREFIX_B_VISIBLE}${_HINT}my hint${_HINT}${ciphertext}${_SUFFIX_NO_COMMENT}`;
			fs.writeFileSync(path.join(dir, 'note.md'), content);

			const { stdout } = runMdenc('test --passwords pw', dir);
			expect(stdout).toContain('PASSED');
		});
	});

	describe('decrypt command', () => {
		it('should decrypt whole-note to .md file', async () => {
			const dir = path.join(tmpDir, 'decrypt-wholenote');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('decrypted content', 'pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('Decrypted');

			const decryptedFile = path.join(outDir, 'note.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
			expect(fs.readFileSync(decryptedFile, 'utf8')).toBe('decrypted content');
		});

		it('should not write files in dry run mode', async () => {
			const dir = path.join(tmpDir, 'decrypt-dryrun');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}" --dryrun`, dir);
			expect(stdout).toContain('dry run');
			expect(fs.existsSync(outDir)).toBe(false);
		});

		it('should fail for wrong password', async () => {
			const dir = path.join(tmpDir, 'decrypt-wrong-pw');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const content = await encryptWholeNote('secret', 'correct-pw');
			fs.writeFileSync(path.join(dir, 'note.mdenc'), content);

			const result = runMdenc(`decrypt --passwords wrong-pw --outdir "${outDir}"`, dir, false);
			expect(result.status).toBe(1);
			const { stdout } = result;
			expect(stdout).toContain('Unable to decrypt');
			expect(fs.existsSync(path.join(outDir, 'note.md'))).toBe(false);
		});

		it('should decrypt inplace encrypted content', async () => {
			const dir = path.join(tmpDir, 'decrypt-inplace');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('inplace secret', 'pw', 2);
			fs.writeFileSync(path.join(dir, 'note.md'), `Before ${encrypted} After`);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('Decrypted');

			const decryptedFile = path.join(outDir, 'note.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
			const content = fs.readFileSync(decryptedFile, 'utf8');
			expect(content).toContain('inplace secret');
			expect(content).toContain('Before');
			expect(content).toContain('After');
			expect(content).not.toContain('🔐');
		});

		it('should decrypt inplace encrypted content (version 3)', async () => {
			const dir = path.join(tmpDir, 'decrypt-inplace-v3');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const encrypted = await encryptInPlace('gamma secret', 'pw', 3);
			fs.writeFileSync(path.join(dir, 'note.md'), `Before ${encrypted} After`);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('Decrypted');

			const decryptedFile = path.join(outDir, 'note.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
			const content = fs.readFileSync(decryptedFile, 'utf8');
			expect(content).toContain('gamma secret');
			expect(content).toContain('Before');
			expect(content).toContain('After');
			expect(content).not.toContain('🔐');
		});

		it('should decrypt multiple inplace matches on the same line', async () => {
			const dir = path.join(tmpDir, 'decrypt-inplace-multi');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			const first = await encryptInPlace('first secret', 'pw', 2);
			const second = await encryptInPlace('second secret', 'pw', 2);
			fs.writeFileSync(path.join(dir, 'note.md'), `Before ${first} middle ${second} After`);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('Decrypted');

			const decryptedFile = path.join(outDir, 'note.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
			const content = fs.readFileSync(decryptedFile, 'utf8');
			expect(content).toContain('first secret');
			expect(content).toContain('second secret');
			expect(content).toContain('Before');
			expect(content).toContain('middle');
			expect(content).toContain('After');
			expect(content).not.toContain('🔐');
		});

		it('should handle empty whole-note files', async () => {
			const dir = path.join(tmpDir, 'decrypt-empty');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(dir, { recursive: true });

			fs.writeFileSync(path.join(dir, 'empty.mdenc'), '');

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('WARN: Empty file');

			const decryptedFile = path.join(outDir, 'empty.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
			expect(fs.readFileSync(decryptedFile, 'utf8')).toBe('');
		});

		it.each(['whole-note', 'inline'])('should preserve existing output when v3 %s content is invalid', async format => {
			const dir = path.join(tmpDir, 'invalid-v3');
			const outDir = path.join(tmpDir, 'output');
			fs.mkdirSync(dir, { recursive: true });
			fs.mkdirSync(outDir);
			const output = path.join(outDir, 'note.md');
			fs.writeFileSync(output, 'existing output');
			if (format === 'whole-note') {
				const data = await FileDataHelper.encrypt('pw', '', 'secret');
				data.kdf!.iterations = 2000001;
				fs.writeFileSync(path.join(dir, 'note.mdenc'), JSON.stringify(data));
			} else {
				const encoded = await new CryptoHelperV3().encryptToBase64('secret', 'pw');
				const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
				bytes[bytes.length - 1] ^= 1;
				fs.writeFileSync(path.join(dir, 'note.md'), `🔐γ ${btoa(String.fromCharCode(...bytes))} 🔐`);
			}
			const result = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir, false);
			expect(result.status).toBe(1);
			expect(fs.readFileSync(output, 'utf8')).toBe('existing output');
		});

		it('should create subdirectories in output', async () => {
			const dir = path.join(tmpDir, 'decrypt-subdirs');
			const subDir = path.join(dir, 'a', 'b');
			const outDir = path.join(dir, 'out');
			fs.mkdirSync(subDir, { recursive: true });

			const content = await encryptWholeNote('nested', 'pw');
			fs.writeFileSync(path.join(subDir, 'note.mdenc'), content);

			const { stdout } = runMdenc(`decrypt --passwords pw --outdir "${outDir}"`, dir);
			expect(stdout).toContain('Decrypted');

			const decryptedFile = path.join(outDir, 'a', 'b', 'note.md');
			expect(fs.existsSync(decryptedFile)).toBe(true);
		});
	});
});
