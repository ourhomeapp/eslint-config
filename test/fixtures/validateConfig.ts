const foo = 1;
const bar = 2;

(['bar', 'baz'] as Foo[]).map((val) => `${val}${foo + bar}`);

enum Foo {
  Bar = 'bar',
  Baz = 'baz',
}
