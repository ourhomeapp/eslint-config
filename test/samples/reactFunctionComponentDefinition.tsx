// should error
export function Comp1() {
  return <div>hi</div>;
}

// should error
export const Comp2 = function Comp2() {
  return <div>hi</div>;
};

// should not error
export const Comp3 = () => <div>hi</div>;
