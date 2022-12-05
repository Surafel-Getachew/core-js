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

const initApp = () => {
  const tButton = document.querySelector('#throttle');
  tButton.addEventListener('click', throttle(clickLog, 2000));
};

const clickLog = () => {
  console.log('click');
};

document.addEventListener('DOMContentLoaded', initApp);

// what this operation basically does is that
// saves the first click time and
// when the second time it's clicked if the difference b/n prevClick and nowClick is > delay
// that means the time expired so it's time to callApi or what ever the cb is assigned to
// but if it's less then it's to soon so it won't click it.
const throttle = (fn, delay) => {
  console.log('This is called immediately');
  let lastTime = 0;
  let clickCount = 0;

  return (...args) => {
    let now = new Date().getTime();
    clickCount += 1;
    // console.log('now', now);
    if (now - lastTime < delay) return;
    lastTime = now;
    console.log('see the interval b/n even happening', clickCount);
    fn(...args);
  };
};
