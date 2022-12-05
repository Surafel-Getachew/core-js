// PureFunction
// The same inpput will result in the same output

// The advantage of PureFunction

// 1. helps write clean code
// 2. easy to test
// 3. easy to debug
// 4. can be used as a utility function
// 5. Decoupled and independent

// Rules to be pure function

// Rule #1: Must have a least one parameter for the pure function
// b/c otherwise it's just the same as assigning to a constant

const fullName = () => 'Dave Gray'; // this isn't pure function b/c it doesn't have parameter and it's the same as example below
const fName = 'Dave Gray';

// Rule 2: no side-effects
// This means accessing a variable outside of the function makes the function impure.
let z = 5;
const sum = (x, y) => x + y + z; // z variable makes a side effect so it's impure function

// Pure function can't access
// Database, API, Storage, Filesystem etc...
// Can't modify DOM
// or even log to the console

// Rule 3: no input state can be modified.
// or no data should be mutated.

let x = 1;

const increment = () => (x += 1);
// increment function breaks all the rules of pure function.
// break Rule #1: doesn't have at least one parameter
// break Rule #2: access a variable outside of the function's scope or accessed lexical scope or has side-effect
// break Rule #3: mutated or modified data but not sure on this because it might be assignment not mutation

// Rule #4: NOTICE that pure functions always return a value

// These common High order function's are pure functions
// they all return a new array doesn't modify one
const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter((num) => num % 2 === 0);
const double = nums.map((num) => num * 2);
const summed = nums.reduce((acc, curr) => acc + curr);
