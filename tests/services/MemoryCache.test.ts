import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryCache } from '../../src/services/MemoryCache.ts';

describe('MemoryCache', () => {
	let cache: MemoryCache<string>;

	beforeEach(() => {
		cache = new MemoryCache<string>();
	});

	describe('put and get', () => {
		it('should return default value when key does not exist', () => {
			const result = cache.get('nonexistent', 'default');
			expect(result).toBe('default');
		});

		it('should return stored value after put', () => {
			cache.put('key1', 'value1');
			expect(cache.get('key1', 'default')).toBe('value1');
		});

		it('should overwrite existing value on second put', () => {
			cache.put('key1', 'value1');
			cache.put('key1', 'value2');
			expect(cache.get('key1', 'default')).toBe('value2');
		});

		it('should store multiple keys independently', () => {
			cache.put('a', 'alpha');
			cache.put('b', 'beta');
			expect(cache.get('a', '')).toBe('alpha');
			expect(cache.get('b', '')).toBe('beta');
		});
	});

	describe('getOrNull', () => {
		it('should return null when key does not exist', () => {
			expect(cache.getOrNull('missing')).toBeNull();
		});

		it('should return value when key exists', () => {
			cache.put('key', 'value');
			expect(cache.getOrNull('key')).toBe('value');
		});
	});

	describe('getFirst', () => {
		it('should return value for first matching key', () => {
			cache.put('b', 'beta');
			expect(cache.getFirst(['a', 'b', 'c'], 'default')).toBe('beta');
		});

		it('should return default when none of the keys exist', () => {
			expect(cache.getFirst(['x', 'y', 'z'], 'default')).toBe('default');
		});

		it('should return value for first key if it exists', () => {
			cache.put('a', 'alpha');
			cache.put('b', 'beta');
			expect(cache.getFirst(['a', 'b'], 'default')).toBe('alpha');
		});
	});

	describe('containsKey', () => {
		it('should return false for missing key', () => {
			expect(cache.containsKey('missing')).toBe(false);
		});

		it('should return true for existing key', () => {
			cache.put('key', 'value');
			expect(cache.containsKey('key')).toBe(true);
		});
	});

	describe('getKeys', () => {
		it('should return empty array initially', () => {
			expect(cache.getKeys()).toEqual([]);
		});

		it('should return all stored keys', () => {
			cache.put('a', 'alpha');
			cache.put('b', 'beta');
			cache.put('c', 'gamma');
			expect(cache.getKeys().sort()).toEqual(['a', 'b', 'c']);
		});
	});

	describe('removeKey', () => {
		it('should return true when key existed', () => {
			cache.put('key', 'value');
			expect(cache.removeKey('key')).toBe(true);
		});

		it('should return false when key did not exist', () => {
			expect(cache.removeKey('missing')).toBe(false);
		});

		it('should make get return default after removal', () => {
			cache.put('key', 'value');
			cache.removeKey('key');
			expect(cache.get('key', 'default')).toBe('default');
		});
	});

	describe('clear', () => {
		it('should remove all keys', () => {
			cache.put('a', 'alpha');
			cache.put('b', 'beta');
			cache.clear();
			expect(cache.getKeys()).toEqual([]);
			expect(cache.get('a', 'default')).toBe('default');
			expect(cache.get('b', 'default')).toBe('default');
		});
	});

	describe('complex types', () => {
		it('should store object values', () => {
			const objCache = new MemoryCache<{ name: string; count: number }>();
			objCache.put('item', { name: 'test', count: 42 });
			expect(objCache.get('item', { name: '', count: 0 })).toEqual({ name: 'test', count: 42 });
		});
	});

	describe('null and undefined values', () => {
		it('should return default when null is stored (null coalescing)', () => {
			const cache = new MemoryCache<string | null>();
			cache.put('key', null);
			expect(cache.get('key', 'default')).toBe('default');
		});

		it('should return default when undefined is stored (null coalescing)', () => {
			const cache = new MemoryCache<string | undefined>();
			cache.put('key', undefined);
			expect(cache.get('key', 'default')).toBe('default');
		});

		it('should return null from getOrNull when null is stored', () => {
			const cache = new MemoryCache<string | null>();
			cache.put('key', null);
			expect(cache.getOrNull('key')).toBeNull();
		});

		it('should return null from getOrNull when undefined is stored', () => {
			const cache = new MemoryCache<string | undefined>();
			cache.put('key', undefined);
			expect(cache.getOrNull('key')).toBeNull();
		});
	});
});
