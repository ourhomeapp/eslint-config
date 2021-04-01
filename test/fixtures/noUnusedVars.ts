// should error
const foo = 5;

// should error
export const bar = (arg1: number, arg2: number, arg3: boolean): number =>
  arg1 + arg2;

// should not error
const _foo = 5;

// should not error
const _bar = (arg1: number, arg2: number, _arg3: boolean): number =>
  arg1 + arg2;
