// Foundation for writing pure function

// JavaScript DataTypes

// Premitve DataTypes vs Structural DataTyps

// PrimitiveDatatTypes

// String
// Boolean
// Number
// undefined
// Symbol
// BigInt

// Structural
// Object: (new) like Object, Array, Map, Set, WeakMap, Date
// Function

// Pass by value vs reference

// Primitves pass by value or they don't use reference
let x = 2;
let y = x;
y += 1; // modifying y will not change the value of x because it's pass by value

console.log(y);
console.log(x);

// Structurals use pass by reference:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray[0] = 0; // modifying yArray will change the value of xArray becuase it's pass by refernce

console.log(yArray);
console.log(xArray);

// Mutable vs Immutable

// Primitves are Immutable
let myName = 'Dave';

myName[0] = 'W'; // nope!

console.log(myName);

// Don't confuse immutable with re-assignment
myName = 'Jack';
console.log(myName);

// Structural DataTypes are mutable

let myArray = [2, 3, 4];
myArray[0] = 1;

console.log(myArray);

// Pure functions require you to avoid
// mutating the data

// Impure functions that mutates the data
const addToScoreHistory = (scoreHistory, score) => {
  scoreHistory.push(score);
  return scoreHistory;
};

const scoreHistory = [22, 34, 11];

console.log(addToScoreHistory(scoreHistory, 12));
// This mutates the original array
// it's called side-effects

// Notice: const doesn't make the array immutable

// We need to modify our function so it does not
// mutate the original data

// Shallow Vs Deep Copy

// Shallow Copy

const kArray = [5, 6, 7, [9, 8, 7]];
const zArray = [...kArray, 4];

zArray[0] = 0;

console.log(kArray);
console.log(zArray);

zArray[3].push(6); // this shouldn't modify kArray but it does b/c shallow copy doesn't work for nested structural DataTypes

console.log(kArray);
console.log(zArray);

// Note Array.from() and Array.slcie() create shallow copy

// Another method to shallow copy is using Object.assign
const tArray = Object.assign([], kArray);
console.log(tArray);

// what about when it comes to Object.freeze()
// Object.freeze will stop it from mutating

const scoreObj = {
  first: 3,
  second: 2,
  third: { a: 1, b: 2, c: 3 },
  fouth: [1, 2, 3],
};

Object.freeze(scoreObj);

scoreObj.first = 4; // this will not work because the obj is freezed
scoreObj.third.a = 8; // this will work b/c freeze is shallow and will not work for nested structural data types
scoreObj.fouth[0] = 0; //this will also work b/c freeze is shallow and will not work for nested structural data types
console.log(scoreObj);

// So, how do we avoid this mutations?
// Deep copy will avoid this mutations.

// Several libraries like lodash,

/* Here's a one line Vanila JS solution
   But it doesn't work with Dates, Functions, Undefined, RegExps, Maps, Sets,
   Inifinity, Blobs, FileLists, ImageDatas and other complex Data Types 

*/

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

// Instead of using a library here's a Vanilla JS solution for DeepCopy

const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;

  //   create an array or obj to hold the values
  const newObj = Array.isArray(obj) ? [] : {};

  for (key in obj) {
    value = obj[key];
    // recursive call for nested array or objects inside of obj
    newObj[key] = deepClone(value);
  }

  return newObj;
};

const cArray = [2, 3, 4, [5, 6, 7]];
const newCArray = deepClone(cArray);

newCArray[3][0] = 8;
console.log(newCArray);
console.log(cArray);

// now we can make a pure function unlike the prev one

const pureAddToScoreHistor = (scoreHistory, newScore) => {
  const newScoreHistory = deepClone(scoreHistory);
  newScoreHistory.push(newScore);

  return newScoreHistory;
};

// Review

// Primitves Vs Structural Data Types

// Primitives Data Types pass by values
// Structural pass by by reference

// Primitive Data Types are immutable
// Structural Data Types are muttable

// Reassignment isn't the same as being mutable.

// Shallow Copy Vs Deep Copy (Clones of DataStructures)

// Shallow copies still share reference of nested structural data types
// which results in the mutation of the original data

// Object.freeze is a shallow

// Deep copies doesn't share references

// All of this important to implement pure functions
// because pure function requires not mutating the original data