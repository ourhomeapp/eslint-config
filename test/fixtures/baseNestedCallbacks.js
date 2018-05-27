const takesCallback = cb => cb();

takesCallback(() =>
  takesCallback(() =>
    takesCallback(() =>
      takesCallback(() =>
        takesCallback(() => takesCallback(() => takesCallback())),
      ),
    ),
  ),
);
