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
  <T>(_: T): T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (t: any) => t;

export { _, withFoo, ident };
