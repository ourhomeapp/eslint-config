import type { FC } from 'react';

// Should not error
export const Foo: FC = (props) => <div {...props} />;
