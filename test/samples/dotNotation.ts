export const foo = process.env['NODE_ENV'];

// should error typescript
export const bar = process.env.NODE_ENV;

const obj = { a: 1 };

// should error eslint
export const baz = obj['a'];
