// Memoization should only be applied for pure function

// Purefunction are functions that gives the same output for the same input i.e the output doesn't change over time
// for the same input.

// Memoization takes extra space and gives speed

const memoizedMultiplyByTen = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      console.log('from cache', cache);
      return cache[num];
    }
    result = num * 10;
    cache[num] = result;
    return result;
  };
};

// const multiplyByTen = memoizedMultiplyByTen()

// console.log(multiplyByTen(2));
// console.log(multiplyByTen(2));
// console.log(multiplyByTen(2));

// Decorator function that will be used memoized any kind of func

const multiplyByTen = (num) => {
  return num * 10;
};

const addMany = (...args) => {
  return args.reduce((acc, num) => {
    return acc + num;
  });
};

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      console.log('from cache', cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};

const memoMulByTen = memoize(multiplyByTen);
const memoizedAddMany = memoize(addMany)

// console.log(memoMulByTen(2));
// console.log(memoMulByTen(2));
// console.log(memoMulByTen(2));

// console.log(memoizedAddMany(2,3,4));
// console.log(memoizedAddMany(2,3,4));
// console.log(memoizedAddMany(2,3,4));


// memoization with recursion
// it greatly shows the benefit of memoization.
// you can see that by uncommenting the two section the memoized and the unmemoized.

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos-2) + fib(pos-1)
}

const memoizedFib = memoize(fib)

console.log(memoizedFib(40));
console.log(memoizedFib(40));
console.log(memoizedFib(40));

// console.log(fib(40));
// console.log(fib(40));
// console.log(fib(40));