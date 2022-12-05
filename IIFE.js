// const add = ((a,b) => {
//     return a + b
// })(2,3);

// console.log(add)


// Reason's to use IIFE

// 1. Doesn't pollute the global object namespace
const x = "whatever"
const helloWorld = () => "Hello World!"

const b = (() => {
    const x = "whateveriife"
    const helloWorld = () => "Hello IFFE!"
    console.log(x)
    console.log(helloWorld())
})();

// console.log(x)
// console.log(helloWorld())

// 2. Private Variables and Methods from Closure

const increment  = (
() => {
    let counter = 0
    console.log(counter);
    const credits = (num) => console.log("I have", num ,"credits")

    return () => {counter+=1; credits(counter)}
}
)() // IIFFE is called once

// increment()
// credits(3) // ref error

// 3. The Module Pattern

const Score = (() => {
    let count = 100;
    return {
        current: () => {return count},
        increment: () => {count+=1}, 
        reset: () => {count = 0} 
    }
}) ()

Score.increment()
console.log(Score.current());
Score.increment()
console.log(Score.current());
Score.increment()
console.log(Score.current());
