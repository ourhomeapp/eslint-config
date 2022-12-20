export const foo = 1;

const bar = 2;

(['bar', 'baz'] as Foo[]).map((val) => `${val}${foo + bar}`);

enum Foo {
  Bar = 'bar',
  Baz = 'baz',
}

export const withFoo = (f: Foo, cb: (f: Foo) => void): void => cb(f);

export type Ident = <T>(foo: T) => T;

export const ident: {
  // testing syntax for type generics in overload
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  <T>(foo: T): T;
} = (t) => t;
