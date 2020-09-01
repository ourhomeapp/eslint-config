const foo = 1;
const bar = 2;

([1, 2, 3] as NumArray).map((n) => n * foo + bar);

type NumArray = number[];
