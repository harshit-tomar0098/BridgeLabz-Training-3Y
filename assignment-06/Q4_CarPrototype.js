// Q4: Constructor function and shared prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is created once and shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Fortuner");
const carTwo = new Car("Honda", "City");

carOne.getDetails();
carTwo.getDetails();

console.log(
    "Both cars share getDetails:",
    carOne.getDetails === carTwo.getDetails
); // true
