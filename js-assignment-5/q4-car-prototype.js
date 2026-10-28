// Q4: Constructor function and a shared prototype method.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Both Car instances share this one function through the prototype.
Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

console.log(firstCar.getDetails());
console.log(secondCar.getDetails());
console.log(
    "Shared method:",
    firstCar.getDetails === secondCar.getDetails
); // true
