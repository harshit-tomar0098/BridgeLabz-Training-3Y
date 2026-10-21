// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;

console.log("Cart Discount Details");
console.log("---------------------");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedSubtotal += finalPrice;

    console.log(
        `${product.item}: Original ₹${product.price.toFixed(2)}, ` +
        `Discount ₹${discount.toFixed(2)}, Final ₹${finalPrice.toFixed(2)}`
    );
}

const extraDiscountRate = discountedSubtotal > 50000 ? 0.05 : 0;
const extraDiscount = discountedSubtotal * extraDiscountRate;
const finalTotal = discountedSubtotal - extraDiscount;

console.log(`Original cart value: ₹${originalTotal.toFixed(2)}`);
console.log(`Subtotal after category discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra overall discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final cart total: ₹${finalTotal.toFixed(2)}`);
// The extra 5% is checked against the subtotal after category discounts.
