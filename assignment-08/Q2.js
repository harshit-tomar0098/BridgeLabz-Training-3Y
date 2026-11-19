// Q2 – Online Food Ordering (map + Error Handling)

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Fries", price: 80 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Map ordered item names to their prices.
    const priceList = orderItems.map((itemName) => {
        const menuItem = menu.find((item) => item.name === itemName);

        if (!menuItem) {
            throw new Error(`Invalid menu item: ${itemName}`);
        }

        return menuItem.price;
    });

    // Add all prices to calculate the total bill.
    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Burger", "Fries", "Pizza"];
    console.log("Order:", order);
    console.log("Total Bill: ₹", calculateBill(order));

    // Uncomment this order to test the error handling.
    // console.log(calculateBill(["Burger", "Pasta"]));
} catch (error) {
    console.error("Order error:", error.message);
}
