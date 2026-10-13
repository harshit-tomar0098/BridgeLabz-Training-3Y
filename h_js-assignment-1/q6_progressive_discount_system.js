// Q6. Progressive Discount System
// Change purchaseAmount to test different discount tiers.
const purchaseAmount = 6500;

let discountPercentage;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = Math.round(purchaseAmount * discountPercentage / 100);
const finalPrice = Math.round(purchaseAmount - discountAmount);

console.log(`Original total: ₹${purchaseAmount}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount amount: ₹${discountAmount}`);
console.log(`Final price after discount: ₹${finalPrice}`);
