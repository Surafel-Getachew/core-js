class Vehicle {
    constructor(_wheels) {
        this.numWheels = _wheels
    }
    
    get wheels() {
        return this.numWheels
    }

    set wheels(_wheels) {
        this.numWheels = _wheels
    }

    static accelerate() {
        console.log("go faster")
    }

    static decelerate() {
        console.log("go slower")
    }

    justAMethod() {
        // like a function
    }
}

// let car = new Vehicle(4)
// car.wheels = 7
// console.log(car.wheels)
// Vehicle.accelerate()

class Car extends Vehicle {
    
    constructor(_wheels,_make,_model,_year) {
        super(_wheels); // call the constructor of the parent class in this case the constructor of Vehicle
        this.make = _make
        this.mdoel = _model
        this.year = _year
    }

    info() {
        console.log(`The ${this.make} ${this.mdoel} was made in ${this.year} and has ${this.numWheels} wheels.`)
    }

}

let ferrari = new Car(4,"Ferrari","Testarossa",1985)
ferrari.info()
Car.accelerate()
