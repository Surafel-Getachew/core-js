// Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve('Yes!, resolved');
  } else {
    reject('No!, rejected');
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    // console.log(value);
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    // console.log(err);
  });

const users = fetch('https://jsonplaceholder.typicode.com/users');

console.log(users);

// The problem with promises is also we can have multiple .then and it also can get out of hand
// you can have a huge chain of thenables