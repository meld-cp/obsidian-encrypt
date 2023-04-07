export class MemoryCache<T> {

	private values = new Map<string,T>();

	public put(key: string, value: T): void {
		//console.debug('MemoryCache.put', {key, value});
		this.values.set( key, value );
	}

	public get(key: string, defaultValue: T): T {
		//console.debug('MemoryCache.get', {key, defaultValue});
		return this.values.get(key) ?? defaultValue;
	}

	public getFirst(keys: string[], defaultValue: T): T {
		//console.debug('MemoryCache.getFirst', {keys, defaultValue});
		
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index];
			if (this.containsKey(key)) {
				return this.get(key, defaultValue);
			}
		}

		return defaultValue;
	}

	public containsKey(key: string): boolean {
		//console.debug('MemoryCache.containsKey', {key});
		return this.values.has(key);
	}

	public getKeys(): string[] {
		//console.debug('MemoryCache.getKeys');
		return Array.from( this.values.keys() );
	}

	public removeKey( key: string ) : boolean{
		return this.values.delete( key );
	}

	public clear() {
		this.values.clear();
	}
}
