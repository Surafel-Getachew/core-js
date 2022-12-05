
const doThing = (fn) => {
    // Going to do it's own stuff
    let name = "Steve"
    fn(name)
}

const hello = (name) => {
    console.log("hello",name);
}

// doThing(hello)

// setTimeout(hello,5000,"Bob");

names = ["Inga","Mattias","Steve"]

// names.forEach(hello)

// The problem with cb is that it might lead to cb hell
// Promises are designed to avoid cb hell

firstFunction (params, function() {
    secondFunction(params,function () {
        thirdFunction(params,function() {
            
        })
    })
})