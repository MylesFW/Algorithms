## Searching Algorithms

---

- describe what a searching algo is
- linear search on arrays
- binary search on sorted arrays
- naive string searching algo
- KMP string searching algo

### Linear Search

Given an array, the simple way to search is to look at every value and check to see if it's the value we want. This is the best search method on un-sorted data.

JavaScript has search methods as functions:

- indexOf()
- includes()
- find()
- findIndex()

Simple linear search example

```js
var namesList = [
	'Myles',
	'Josh',
	'Albert',
	'Biggies',
	'Zulu',
	'Michael',
	'Richard',
	'Steven',
	'Rick',
	'Amanda',
	'Patrick',
	'Tommy',
	'Alley',
	'Carter',
];

console.log(namesList.indexOf('Zulu')); // returns 4
console.log(namesList.indexOf('Nikolai')); // returns -1
console.log(namesList.includes('Biggies')); // returns true
console.log(namesList.includes('Nigel')); // returns false
```

```js
var numList = [5, 8, 1, 100, 12, 3, 12, 50, 20, 44, 32, 1, 8, 6];

console.log(numList.indexOf(44)); // returns 9
console.log(numList.includes(3)); // returns true
```

```js
function linearSearch(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}

console.log(
	linearSearch([45, 74, 4, 12, 54, 74, 4, 4, 5, 8, 754, 54, 65, 46, 58, 8], 1)
);
```

## Binary Search Algo / Divide and Conquer

Rather than search one element at a time and ruling it out, this halves the array over and over until the value is reached. _the data must be sorted_

```js
// if we wanted to find 7 in this array
var dataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//                <smaller ^ greater>
var dataSet = [-, -, -, -, -, 6, 7, 8, 9, 10];
//                         <smaller ^ greater>
var dataSet = [-, -, -, -, -, 6, 7, 8, -, -];
//                      <smaller ^ greater>
```

### Binary Search Pseudo

1. Write a function that accepts a sorted array and a value
2. Create a left (at start) and right (at end) pointers
3. While the left pointer comes before the right
   1. Create a middle pointer
   2. If you find the value, return the index
   3. If the value is too small, move the left pointer up
   4. If the value is too large, move the right pointer down
4. If you never find the value, return -1

### Implimentation

```js
function binarySearch(arr, num) {
	var start = 0;
	var end = arr.length - 1;
	var mid = Math.floor((start + end) / 2);

	while (start <= end && arr[mid] !== num) {
		if (num < arr[mid]) {
			// if the num is less than the mid point, move the end point
			end = mid - 1;
		} else {
			// if the num is more than the mid point, move the start point
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2); // recalculate the mid point
	}
	if (arr[mid] === num) {
		// if mid point === num, return its index
		return mid;
	}
	return -1; // if mid point !== num, return -1 (it stops checking once the start and end pointers touch)
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 9)); // return 6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 21)); // return 10
console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 12)); // not found, return -1
```
