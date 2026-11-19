// Q6 – E-Commerce Inventory System

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 3 },
    { id: 3, name: "Chair", category: "Furniture", price: 4000, stock: 12 },
    { id: 4, name: "Desk", category: "Furniture", price: 8000, stock: 2 },
    { id: 5, name: "Notebook", category: "Stationery", price: 60, stock: 30 }
];

// 1. Return products with stock less than 5.
function getLowStockProducts() {
    return products.filter((product) => product.stock < 5);
}

// 2. Sort by price from low to high. Copy first to avoid changing original.
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total value = price multiplied by stock for every product.
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

// 4. Group products by category using reduce().
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.table(getLowStockProducts());

console.log("Products Sorted by Price:");
console.table(sortProductsByPrice());

console.log("Total Inventory Value: ₹", calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());
