let log = console.log

let myObj = {} // new Object()

// log(myObj.constructor)
// log(myObj.__proto__)
// log(myObj.__proto__ === myObj.constructor.prototype)


function Cat() {
    // constructor for kitty
}

let kitty = new Cat();

// log(kitty.__proto__ === Cat.prototype)
// log(kitty.__proto__.__proto__ === Object.prototype)
// log(Object.prototype.__proto__)

function Animal() {}

Object.setPrototypeOf(Cat.prototype, Animal.prototype)

log(kitty.__proto__) // Cat{}
log(kitty.__proto__.__proto__) // Animal{}
log(kitty.__proto__.__proto__.__proto__) // Object{}
log(kitty.__proto__.__proto__.__proto__.__proto__) // null


