const doAsyncThing = () => Promise.resolve();

export const someFunc = (): void => {
  console.log('hoho');
  // should not error
  void doAsyncThing();
};

export const someOtherFunc = (): number => void 0;

export const anotherFunc = void doAsyncThing();
