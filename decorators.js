// JS Decorator function

// Decorators wrap func inside another function
// These wrappers "decorates" the original function with new capabilites

// The concept of decorators isn't exclusive to JS

// Benefits: DRY and clean code through composition

// Example 1: Count the function calls
const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num);
};

// decorator function
const countCalls = (fn) => {
  let count = 0;
  return (...args) => {
    console.log('Call Count:', (count += 1));
    return fn(...args);
  };
};

const sum = countCalls(addMany);

// console.log(sum(2, 4, 6));
// console.log(sum(2, 4, 6));
// console.log(sum(2, 4, 6));

// Example 2: Multiple Decorators

let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...args) => {
    if (args.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...args);
  };
};

const requireIntegers = (fn) => {
  return (...args) => {
    args.forEach((arg) => {
      if (!Number.isInteger(arg)) {
        throw new TypeError(`Args must be integers`);
      }
    });
    return fn(...args);
  };
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

console.log(rectangleArea(2, 3));
console.log(rectangleArea(2, "6"));
