```js
const items = [
	{ name: 'Bike', price: 85 },
	{ name: 'TV', price: 450 },
	{ name: 'Record', price: 8 },
	{ name: 'Book', price: 11 },
	{ name: 'iPhone', price: 900 },
	{ name: 'Couch', price: 750 },
	{ name: 'Sunglasses', price: 150 },
	{ name: 'Coffee Mug', price: 4 },
	{ name: 'Shirt', price: 20 },
];
```

## .filter()

Filter a given array and returns a new array that contains only the desired information.

```js
const filteredPrice = items.filter((item) => {
	return item.price <= 200;
}); // return new array with items costing less than 200
console.log(filteredPrice);

const filteredItemLength = items.filter((item) => {
	return item.name.length < 5;
}); // return new array with items whose names are shorter than 5
console.log(filteredItemLength);
```

## .map()

Iterate over the array, create a new array that then allows us to change it without affecting the original array.

```js
const itemNames = items.map((item) => {
	return item.name;
});
// return a new array containing only the names
console.log(itemNames);

const itemPrices = items.map((item) => {
	return item.price;
});
// return a new array containing only the prices
console.log(itemPrices);
```

## .find()

Find the **first** item in the array that returns True

```js
const foundItem = items.find((item) => {
	return item.name === 'iPhone';
});
// return the FIRST item in the array that is true
console.log(foundItem);
```

## .forEach()

Loop over an array and returns a list of all the parameters.

```js
items.forEach((item) => {
	console.log(item.name);
});
// returns a list of all names
```

## .some()

Checks the array and returns a bool if **any** item is true.

```js
const hasInexpensiveItems = items.some((item) => {
	return item.price < 100;
});
//returns a bool if there are any items where the price is less than 100
console.log(hasInexpensiveItems);
```

## .every()

Checks the array and returns a bool if **all** items are true.

```js
const allExpensiveItems = items.every((item) => {
	return item.price < 100;
});
//returns a bool if all items price is less than 100
console.log(allExpensiveItems);
```

## .reduce()

Calculates the total sum of the prices starting at the second parameter.

```js
const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, 0);
// total all the prices and return that total amount

// items.reduce((total price amount, in the item array) => {
// 	return item.price + total price amount;
// }, the starting amount the total is added to);

console.log(total);
```
