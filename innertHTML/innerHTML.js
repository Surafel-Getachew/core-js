// 2 big reasons innerHTML should be avoided
// 1. because it is very slow b/c it reparse and recreate every node inside the parent
// 2. it makes it vulnerable to XSS Attack
// solution to avoid those
// 1. create fragment and create the elements and when done append just the fragmen it's much faster
// 2. Sanitaize the input before setting it to XSS Attack.
const initApp = () => {
  const button1 = document.getElementById('b1');
  button1.addEventListener('click', createParsa1);

  const button2 = document.getElementById('b2');
  button2.addEventListener('click', createParsa2);

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    processInput();
  });
};

document.addEventListener('DOMContentLoaded', initApp);

// this is very slow b/c innerHTML has to reparse and recreate every node DOM's inside the parent
const createParsa1 = () => {
  const start = Date.now();

  const main = document.querySelector('main');

  let i = 0;
  while (i < 500) {
    main.innerHTML += `<p>my value is ${i}</p>`;
    i++;
  }
  const duration = Date.now() - start;
  console.log('duration', duration);
};

const createParsa2 = () => {
  const start = Date.now();
  const main = document.querySelector('main');
  const fragment = document.createDocumentFragment(); // light weight part of the document but it's not attached to the document
  // and in fragment it's not going to get attached to the DOM but every thing inside of it is going to be attached to the DOM
  let i = 0;

  while (i < 1000) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `my value is ${i}`;
    fragment.append(paragraph);
    i += 1;
  }
  main.append(fragment);
  const duration = Date.now() - start;
  console.log('it takes', duration);
};

const processInput = () => {
  const inputVal = document.querySelector('input').value;
  const h1 = document.querySelector('h1');
  // this will result in XSS Attack
  //   if you input this val(<img src="x" onerror='alert("XSS attack")'/>) to the input it will alert the page or simulate and XSS Attak
  //   h1.innerHTML = inputVal; // this causes XSS attack
  //h1.textContent = inputVal; // this is safe
  h1.innerHTML = sanitaizeInput(inputVal); // this also helps in preventing XSS attack by sanitizing the input value
  //   you can also use RegX to prevent XSS attack
};

// you can sanitaize it to prevent XSS attack
const sanitaizeInput = (inputValue) => {
  const div = document.createElement('div');
  div.textContent = inputValue;
  return div.innerHTML;
};
