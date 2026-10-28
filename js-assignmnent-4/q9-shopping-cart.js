// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || price < 0 || quantity < 1 || !Number.isInteger(quantity)) {
            throw new Error("Provide a name, non-negative price, and positive whole-number quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Only SAVE20 and DISC10 are accepted by the required coupon format.
        const match = /^(SAVE|DISC)(10|20)$/.exec(code.trim().toUpperCase());
        if (!match) {
            return { valid: false, discountPercent: 0, finalTotal: this.getTotal() };
        }

        const discountPercent = Number(match[2]);
        const finalTotal = this.getTotal() * (1 - discountPercent / 100);
        return {
            valid: true,
            discountPercent,
            finalTotal: Number(finalTotal.toFixed(2))
        };
    }
}

const cart = new Cart();
cart.addItem("T-shirt", 599, 2);
cart.addItem("Notebook", 120, 3);
cart.addItem("Headphones", 1499, 1);

const itemsList = document.getElementById("itemsList");
cart.items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} — ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`;
    itemsList.appendChild(listItem);
});

const subtotal = cart.getTotal();
document.getElementById("subtotal").textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
document.getElementById("finalTotal").textContent = `Final total: ₹${subtotal.toFixed(2)}`;

document.getElementById("couponForm").addEventListener("submit", event => {
    event.preventDefault();
    const code = document.getElementById("coupon").value;
    const result = cart.applyCoupon(code);
    const message = document.getElementById("message");

    if (!result.valid) {
        message.textContent = "Invalid coupon. Use SAVE20 or DISC10.";
        message.style.color = "#c62828";
        document.getElementById("finalTotal").textContent = `Final total: ₹${subtotal.toFixed(2)}`;
        return;
    }

    message.textContent = `${result.discountPercent}% discount applied successfully.`;
    message.style.color = "#16803c";
    document.getElementById("finalTotal").textContent = `Final total: ₹${result.finalTotal.toFixed(2)}`;
});
