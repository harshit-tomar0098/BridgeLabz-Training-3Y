// Q8 – Movie Ticket Booking System

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add a method to MovieTicket.prototype.
MovieTicket.prototype.printTicket = function () {
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const ticket1 = new OnlineTicket("Avengers", "A10", 250, 30);
const ticket2 = new OnlineTicket("Interstellar", "B5", 300, 25);

ticket1.printTicket();
console.log(`Total Amount: ₹${ticket1.getTotalAmount()}`);
console.log("--------------------");

ticket2.printTicket();
console.log(`Total Amount: ₹${ticket2.getTotalAmount()}`);

// OnlineTicket objects can call printTicket() because their prototype chain
// leads to MovieTicket.prototype.
