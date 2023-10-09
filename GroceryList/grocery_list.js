// List of Grocery Items
const groceries = [
    {name: "Milk", quantity: 2, price: 3.50},
    {name: "Eggs", quantity: 12, price: 2.00},
    {name: "Bread", quantity: 1, price: 1.50},
    {name: "Butter", quantity: 1, price: 4.50},
    {name: "Cereal", quantity: 1, price: 5.00},
    {name: "Bananas", quantity: 6, price: 0.65},
    {name: "Pizza", quantity: 2, price: 16.25},
    {name: "Ice Cream", quantity: 1, price: 4.75},
    {name: "Coffee", quantity: 1, price: 6.50},
    {name: "ground turkey", quantity: 1, price: 4.00},
    {name: "bagel", quantity: 1, price: 3.00},
];

// forEach: Display each item on the console.
groceries.forEach(item => {
    console.log(`Item: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`);
    alert(`Item: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`);
});

// find: Search for an item based on user input.
let searchItem = prompt("Enter the name of the grocery item you're searching for:");
let foundItem = groceries.find(item => item.name.toLowerCase() === searchItem.toLowerCase());
if (foundItem) {
    console.log(`Found: ${foundItem.name} - $${foundItem.price}`);
    alert(`Found: ${foundItem.name} - $${foundItem.price}`);
} else {
    console.log("Item not found.");
    alert("Item not found.");
}

// filter: Display items under $5.
let cheapItems = groceries.filter(item => item.price < 5);
console.log("Items under $5:", cheapItems);
alert("Items under $5: " + JSON.stringify(cheapItems));

// reduce: Calculate the total cost of all items.
let totalCost = groceries.reduce((sum, item) => sum + item.price, 0);
console.log(`Total cost of all items: $${totalCost}`);
alert(`Total cost of all items: $${totalCost}`);

// map: Apply a 10% discount to all items.
let discountedItems = groceries.map(item => {
    return {
        name: item.name,
        quantity: item.quantity,
        price: item.price * 0.9  // Applying 10% discount
    };
});
console.log("Items after 10% discount:", discountedItems);
alert("Items after 10% discount: " + JSON.stringify(discountedItems));

// slice: Display the first three items.
let firstThreeItems = groceries.slice(0, 3);
console.log("First three items:", firstThreeItems);
alert("First three items: " + JSON.stringify(firstThreeItems));