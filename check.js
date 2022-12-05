const sum = (a, b) => console.log(a + b);
const addMultiple = (...args) => args.reduce((acc, cur) => (acc + cur));

const decorator = (fn) => {
  console.log('decorator will be called');
  let count = 0;
  return (...args) => {
    console.log(`call count ${(count += 1)}`);
    fn(...args);
  };
};

x = decorator(sum(2, 3)); // this function compose
console.log(x);
// x(2, 3);
// x(3, 3);
// x(4, 3);

// y = decorator(addMultiple);
// console.log(y(2, 3, 4, 5, 6));
