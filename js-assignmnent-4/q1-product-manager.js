// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
    }

    getDetails() {
        return `ID: ${this.id} | ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1500, "Accessories"),
    new Product(2, "Mouse", 700, "Accessories"),
    new Product(3, "Monitor", 8500, "Electronics"),
    new Product(4, "USB Cable", 250, "Accessories")
];

products[0].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.getDetails()));

console.log("\\nProducts priced above ₹1000:");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.getDetails()));
