// Q5 – Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Distance must be provided and cannot be negative.");
        }

        const baseFare = 50;
        const perKmRate = 12;
        return baseFare + this.distance * perKmRate;
    }
}

const driver = new Driver("Ravi", 4.8, "Car", "UP-80-AB-1234");
console.log(`Driver: ${driver.name}, Rating: ${driver.rating}`);
console.log(`Vehicle: ${driver.vehicle}, Number: ${driver.vehicleNumber}`);

try {
    const trip = new Trip("Aligarh", "Mathura", 40);
    console.log(`Trip: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log(`Fare: ₹${trip.calculateFare()}`);

    // To test the error, try a negative distance:
    // const invalidTrip = new Trip("A", "B", -5);
    // console.log(invalidTrip.calculateFare());
} catch (error) {
    console.error("Trip error:", error.message);
}
