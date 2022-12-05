console.log('x', x);

var x = 2;
// var x is declaration
// = 2 is initialization
// and the declaration part is only hoisted
// not the initialization that's why when printing x it say undefined


stepOne() // this works because the function declaration is moved up in memory or hoisted


function stepOne(){ // this is function declaration
    console.log("Step one");
}

stepTwo() // this will cause a problem because 1. you can't hoist let and const and 2. it's func initialization

const stepTwo = () => { // this is function initialization of the anonymous or arrow function
    console.log("Step two");
}

// In summary declaration's are hoisted and initialization's are not.
// function declaration can be hoisted
// arrow functions are function initialization so they are not hoisted
// let and const are not hoisted
// var is hoisted