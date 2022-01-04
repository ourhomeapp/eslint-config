// should error
const foo = 5;

// should error
const _foo = 5;

// should error
export const bar = (arg1: number, arg2: number, arg3: boolean): number =>
  arg1 + arg2;

// should not error
export const baz = (arg1: number, arg2: number, _arg3: boolean): number =>
  arg1 + arg2;

// should not error
export const qux = (arg1: number, arg2: number, _: boolean): number =>
  arg1 + arg2;

// should not error
const { a: _, ..._obj } = { a: 1, b: 2 };

// should not error
const [, ..._arr] = [1, 2];
