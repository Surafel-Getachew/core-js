// what is lexical scope and what is closure and what is their d/f
// lexical scope is when a child function has acess to the parent and global scope. lexical scope isn't closure it's just important piece
// closure is when a child function has acess to the parent scope and global scope even after the parent func is called or closed
// their difference is lexical scope is just an important piece not the whole thing of closure

const lexicalScope = () => {
  let x = 1;
  console.log(x);
  const childFunc = () => {
    console.log((x += 5));
  };
  childFunc();
};

lexicalScope();

const closure = () => {
  let x = 1;
  console.log(x);
  const childFunc = () => {
    console.log((x += 5));
  };
  return childFunc;
};

let result = closure(); // the parent func is done or closed.
result(); // the parent func is closed or done above but the child func has still access to the parent func scope
result(); // this still has acces to the parent var x this is closure

// closure with IIFE
const closureIIFE = (() => {
  let count = 0; // private var
  console.log(
    'it will be called immediately b/c the func is called immediately, count:',
    count
  );
  return () => {
    count += 1;
    console.log('count:', count);
  };
})();

closureIIFE(); // this are child func b/c the parent is already been called b/c of IIFE
closureIIFE();
closureIIFE();

// IIFE with parameters
const play = ((coins) => {
  let credit = coins;
  console.log('initial credit value', credit);
  return () => {
    credit -= 1;
    if (credit > 0) console.log(`Playing, credit remainng ${credit}`);
    else {
      console.log('no playing!, credit remaing', credit);
    }
  };
})(3);

play();
play();
play();
