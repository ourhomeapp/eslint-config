const noop = () => undefined;

const doSomething = noop;
const doSomethingVeryLongName = noop;
const doSomethingVeryVeryVeryVeryLongName = noop;

// should not warn
export const curly1 = (someArgument) => {
  if (someArgument) doSomething(someArgument);
  else doSomething(someArgument);
};

// should not warn
export const curly2 = (someArgument) => {
  if (someArgument) {
    doSomething(someArgument);
  } else {
    doSomethingVeryVeryVeryVeryLongName(someArgument);
  }
};

// should warn
export const curly3 = (someArgument) => {
  if (someArgument) {
    doSomethingVeryLongName(doSomethingVeryVeryVeryVeryLongName(someArgument));
  } else doSomething(someArgument);
};

// should warn
export const curly4 = (someArgument) => {
  if (someArgument)
    doSomethingVeryLongName(doSomethingVeryVeryVeryVeryLongName(someArgument));
  else doSomething(someArgument);
};

// should warn
export const curly5 = (someArgument) => {
  if (someArgument) doSomething(someArgument);
  else
    doSomethingVeryLongName(doSomethingVeryVeryVeryVeryLongName(someArgument));
};
