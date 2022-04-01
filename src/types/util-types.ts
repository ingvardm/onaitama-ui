export type FixedArray<N extends number, T> =
	Array<T> & { 0: T; length: N }
