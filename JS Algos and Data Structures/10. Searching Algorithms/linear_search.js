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

console.log(namesList.indexOf('Zulu'));
console.log(namesList.includes('Michael'));

var numList = [5, 8, 1, 100, 12, 3, 12, 50, 20, 44, 32, 1, 8, 6];

console.log(numList.indexOf(44));
console.log(numList.includes(3));

// Q3 this is what indexOf() and what includes() is doing

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

// Q4

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

// Q4 (simplified)

function binarySearch(arr, num) {
	var start = 0;
	var end = arr.length - 1;
	var mid = Math.floor((start + end) / 2);

	while (start <= end && arr[mid] !== num) {
		if (num < arr[mid]) end = mid - 1;
		else start = mid + 1;
		mid = Math.floor((start + end) / 2);
	}
	return arr[mid] === num ? mid : -1; // ':' acts as the else
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 9)); // return 6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 21)); // return 10
console.log(binarySearch([1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 21], 12)); // not found, return -1
