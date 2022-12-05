// what is debounce
// debounce is a way to stop a function from being excuted too soon

// throttle fire event b/n a certain intervals

// my observation on the difference b/n debounce and throttle
// debounce will reset the time delay if you fire event before the previous delay is done
// and the function is called when once done
// for example if you are typing it will continously reset the delay to 0 if the delay isn't completed and
// will call the function only when the delay is fully completed

// throttle fires the event always b/n a certain interval
// throttle doesn't reset the timer on every event change/fire but instead once completed the first delay and 
// will call the function

// Golden rule b/n debounce and throttle
// use debounce if you are interested on the final result
// use throttle if you want the result on a certain time interval or if you want the intermidiate state

// In Summary 
// debounce for final state eg. when user is done typing
// throttle for intermediate state eg. scrolling the page and we want some thing to happen in a regular interval


const onChange = () => {
  console.log('onChange called');
};

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.getElementById('name').addEventListener(
  'input',
  debounce((e) => {
    console.log(e.target.value);
  }, 2000)
);
