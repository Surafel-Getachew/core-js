// Function currying
// function's are first class objects
// just like str, number and boolean
// this means that they can be passed to function and returned from functions

const x = (a) => {
  console.log('x');
  a();
  return a;
};

const y = () => {
  console.log('y');
};

// let b = x(y);
// b()

const greeting = (msg) => {
  return (name) => {
    console.log(msg, name);
  };
};

const english = greeting('Hi')('Jon');
const espanol = greeting('Hola')('Carlos');
const deutsch = greeting('Tag')('Mattias');
// english("Jon")
// espanol("Carlos")
// dutsch("Mattias")

const buildSammy = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3} `;

console.log(buildSammy('turkey')('chesse')('bread'));

const multiply = (x, y) => x * y;
const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

// Partially applied functions are common use of currying

timesTen = curriedMultiply(10);
console.log(timesTen(8));

// Another common use of carrying is func composition
// Allows calling small func in a specific order

const addCustomer =
  (fn) =>
  (...args) => {
    console.log('Saving customer info...');
    return fn(...args);
  };

const processOrder =
  (fn) =>
  (...args) => {
    console.log('Processing order #', args[0]);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed.`);
};

// completeOrder = processOrder(completeOrder)
// completeOrder = addCustomer(completeOrder)
// completeOrder("1000")

// function addCustomer (...args) {
//     console.log("Saving customer info...");
//     return function processOrder(...args) {
//         console.log("Processing order #",args[0]);
//         return function completeOrder(...args) {
//             console.log(`Order #${[...args].toString()} completed.`);
//         }
//     }
// }

// add = addCustomer(comp)
// proc = add()
// comp = proc()
// comp("1000")

// Infinite currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2)(3)(4)());

