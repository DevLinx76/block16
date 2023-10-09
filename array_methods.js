/* Workshop: Array Methods */


// 3. Defining our items array
const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 4, name: 'quq', price: 13 }  // Note: I corrected the id to 4 for this item to ensure unique IDs
];

// 4. Using prompt() to ask the user for item's name
const name = prompt("Please enter the name of an item:", "foo");

// 5. Using the find() method on the items array
const found = items.find(item => item.name === name);

// 6. Logging the found item or a "not found" message
if (found) {
    console.log(`Found the item: `, found);
} else {
    console.log(`Item not found.`);
}

// 7. Prompt the user to enter a search string
const search = prompt("Enter a string to search for in item names:", "item");

// 8. Using the filter() method
const foundItems = items.filter(item => item.name.includes(search));
console.log(`Items that match the search: `, foundItems);

// 9. Using the map() method
const keyForMapping = prompt("Choose a key (ID, name, price) to display values:", "price");
const mappedValues = items.map(item => item[keyForMapping]);
console.log(`Mapped values: `, mappedValues);

// 10. Using the reduce() method
const keyForReducing = prompt("Choose a key to reduce by (ID or price):", "price");
const reducedValue = items.reduce((accumulator, item) => accumulator + item[keyForReducing], 0);
console.log(`Total ${keyForReducing}: `, reducedValue);
