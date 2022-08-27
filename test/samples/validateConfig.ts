const foo = 1;
const bar = 2;

(['bar', 'baz'] as Foo[]).map((val) => `${val}${foo + bar}`);

enum Foo {
  Bar = 'bar',
  Baz = 'baz',
}

const withFoo = (f: Foo, cb: (f: Foo) => void): void => cb(f);

const _ = 5;

const ident: {
  // testing syntax for type generics in overload
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  <T>(_: T): T;
} = (t) => t;

const ident2: <T>(_: T) => T = (t) => t;

export { _, withFoo, ident, ident2 };
