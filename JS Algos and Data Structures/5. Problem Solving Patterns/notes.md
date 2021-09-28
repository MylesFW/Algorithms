# Algos and Problem Solving Strategies

1. Devise a plan for solving problems
2. **Master common problem solving patterns**

## Problem Solving Patterns

---

Some Common Patterns

- Frequecncy Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- etc...

# Frequency Counters

### Example

> Write a function called same which accept two arrays.
> The function should return true if every value in the array has it's corresponding calue squared in the second array. The grequency of values must be the same.

first array has some numbers. does the second array have all the same numbers squared?

```js
same([1, 2, 3], [4, 1, 9]); //true
same([1, 2, 3], [4, 9]); //false
same([1, 2, 1], [4, 4, 1]); //false (must be same frequency)
```

Poor Solution.

O(n^2). Quadradic time due to the nested loop.

```js
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	// must be same lengths

	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		// loop through.
		// if a number at arr1[i]^2 is not in arr2.

		arr2.splice(correctIndex, 1);
		// remove the squared number from its arr.
		// the end results in an empty arr.
	}
	return true;
}
```

Better Solution.

O(n). Using a frequency counter method. Instead of looping over the array, then loop over the second to check the values, we can only loop over each array 1 time.

```js
function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	// must be same lengths

	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	// {1: 1, 2: 2, 3: 1}
	//   1: 1
	//   2: 2 <- 2 occurs 2 times, so we need to have 4 occure 2 times
	//   3: 1 <- 3 occurs 1 time, so 9 must occure 1 time
	//   5: 1

	for (let val of arr1) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	// {1: 1, 4: 2, 9: 1}
	//   1: 1
	//   4: 2 <- the object values must be the same as frequencyCounter1
	//   9: 1
	//   11: 1

	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		//is that a key in frequencyCouter2?
		//there is!
		//5- is 5^2 in frequencyCounter2?
		//no. return false.

		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
		//now do their values correspond?
		//if there were 2 2s, there need to be 2 4s
	}
	console.log(frequencyCounter1);
	console.log(frequencyCounter2);
	return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
```

```js
function validAnagram(first, second) {
	//if the lengths don't match
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {}; // or "counter"

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		//if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		//cant find letter or if letter is zero, it is not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
}
```

# Multiple Pointer

Navigate a sorted array or string using multiple pointers at the same time.

### Example

> Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

> sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3, 3]  
> sumZero([-2, 0, 1, 3]) //undefined  
> sumZero([1, 2, 3]) //undefined

Poor Solution.

O(N^2). Quadratic Time due to the nested loop.

```js
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		//starts at -4
		for (let j = i + 1; j < arr.length; j++) {
			//loops over the entire rest of the array looking for something that adds to -4 to equal zero
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
```

Better Solution. Refactoring the previous.

O(N). Linear time complexity

```js
function sumZero(arr) {
	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	while (leftPointer < rightPointer) {
		// if '<=' was used instead of '<' it would mean the pointers cross, and any number - itself is 0. This would be a false positive.
		let sum = arr[leftPointer] + arr[rightPointer];

		if (sum === 0) {
			return [arr[leftPointer], arr[rightPointer]];
			// if sum = 0, return
		} else if (sum > 0) {
			rightPointer--;
			//if sum > 0, move the rightPointer down 1
		} else {
			leftPointer++;
			//if sum < 0, move the leftPointer up 1
		}
	}
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
//      LP^                        RP^      -4 + 10 = 6
//      LP^                     RP^         -4 + 3 = -1
//          LP^                 RP^         -3 + 3 = 0
// return [-3, 3]
```

### Example

> Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. Both pointers start on the same side and move together.

This solution solves the problem without changing the array

```js
function countUniqueValues(arr) {
	if (arr.length === 0) {
		return console.log('total # of unique numbers = ', 0);
	}

	let total = 1;
	let LP = 0;
	let RP = 1;

	while (LP <= arr.length) {
		if (arr[LP] < arr[RP]) {
			total += 1;
			RP++;
			LP++;
		} else {
			RP++;
			LP++;
		}
	}
	return console.log('total # of unique numbers = ', total);
}

countUniqueValues([1, 1, 1, 1, 1, 2, 2]);
countUniqueValues([1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);
countUniqueValues([]);
countUniqueValues([-3, -3, -2, -1, 0, 1]);
```

An alternate solution is possible only if the array can be altered.

```js
function countUniqueValues(arr) {
	if (arr.length === 0) {
		return 0;
	}
	var i = 0;
	for (var j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
}

countUniqueValues([1, 1, 1, 1, 2, 3]);

//countUniqueValues([1, 1, 1, 1, 2, 3]);
//                  i^ j^
//countUniqueValues([1, 1, 1, 1, 2, 3]);
//                  i^    j^
//countUniqueValues([1, 1, 1, 1, 2, 3]);
//                  i^    j^
//countUniqueValues([1, 1, 1, 1, 2, 3]);
//                  i^       j^
//countUniqueValues([1, 2, 1, 1, 2, 3]);
//                     i^       j^
//countUniqueValues([1, 2, 3, 1, 2, 3]);
//                        i^       j^
```

# Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another. Very useful for keeping track of a subset of data in an array/string etc.

### Example

> Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive element in the array.

Poor Solution

O(N^2).

```js
function maxSubarrySum(arr, num) {
	if (num > arr.length) {
		return null;
	}
	//sum of 5 consecutive numbers but the arr.length is only 3, return null
	var max = -Infinity;
	//-Infinity means that if an array of all neg numbers is presented, it still works
	for (let i = 0; i < arr.length - num + 1; i++) {
		//loop stops at 2, since that is the last possible group of 3
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		//sums the 3 numbers together and set that as the temp
		if (temp > max) {
			max = temp;
		}
		// if temp is larger than max, replace max with temp amount
	}
	return max;
}

maxSubarraySum([2, 6, 5, 4, 8, 3, 2, 5, 4], 3);
//              ^     ^               => 2 + 6 + 5 = 13
//                 ^     ^            => 6 + 5 + 4 = 15
//                    ^     ^         => 5 + 4 + 8 = 17

//each new set of 3 must re-add all numbers back together
```

Sliding Window Refactoring

Better Solution

O(N). While this may not save time for this small amount, it exponentially saves time.

```js
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) {
		return null;
	}
	for (let i = 0; i < num; i++) {
		maxSum = +arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

maxSubarraySum([2, 6, 5, 4, 8, 3, 2, 5, 4], 3);
//              ^     ^                 => 2 + 6 + 5 = 13
//               -2^     ^+4            => 13 - 2 + 4 = 15
//                  -6^     ^+8         => 15 - 6 + 8 = 17
//here the 'window' moves
//storing the tempSum amount, subtracting the number leaving the scope, and adding the number entering the scope
```

# Divide & Conquer

This pattern incolces dividing a data set into smaller chinks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity. \*must be sorted

This is where data (like an array) will halve it over and over until it reaches its goal.
