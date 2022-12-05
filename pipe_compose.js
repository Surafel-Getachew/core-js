// Functional Programming

// often uses componse and pipe = high order functions

// a high order function is a function that takes a function
// as an argument, returns another function or both i.e take function as an argument and return function

// here's how a compose function works
// just how it works it's not an example of compose func or we can't call it compose func

const add = (x) => x + 2;
const subtract = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the function is excuted from inside to outside or from right to left.

const result = multiplyBy5(subtract(add(4)));
console.log(result);

// the above isn't a compose function

// Our compose and pipe function
// lodash and ramda.js has their own compose and pipe functions

// to get the compose order from right to left as we can see with nested
// function calls in our example above, we need reduceRight

const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);

const composeResult = compose(multiplyBy5, subtract, add)(4);
console.log(composeResult);

// To do the same but read from left to right we can use pipe
// it's the same except it uses reduce

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add, subtract, multiplyBy5)(4);
console.log(pipeResult);

// word count using pipe

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam asperiores itaque excepturi! Sapiente, beatae fuga temporibus pariatur impedit velit placeat blanditiis voluptatum ut! Aliquam quas, magnam reiciendis quod labore officiis voluptas consequatur deserunt quis perferendis ratione veritatis doloribus suscipit distinctio accusamus sapiente nam nihil adipisci, fuga dolorem cupiditate iure saepe inventore esse. Perferendis reiciendis quae officiis sit tenetur totam!';

const splitOnSpace = (word) => word.split(' ');
const countWord = (arr) => arr.length;

// i can call it immediately like this
const numOfWords = pipe(splitOnSpace, countWord)(lorem);
console.log(numOfWords);
// or call it after
const numOfWords2 = pipe(splitOnSpace, countWord);
console.log(numOfWords2(lorem));

// Combine process: check for palindrome
const removeSpace = (word) => {
  return word.split(' ').join('');
};
const toLower = (word) => {
  return word.toLowerCase();
};
const checkPalindrome = (word) => {
  console.log('pal', word);
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return false;
};

const pal1 = 'taco cat';
const pal2 = 'UFO tofu';
const pal3 = 'Dave';

// const isPalindrome = compose(checkPalindrome, toLower, removeSpace)(pal1); // has some bug
// console.log(isPalindrome);
