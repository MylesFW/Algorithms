# Big O Notation

This is the measurement of creating a more efficient algorithm solution

## Example

> Write a function that calculates the sum of all numbers from 1 up to (and including) some number _n_.

### Which Solution is better?

What is better?

A.

```javascript
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
```

B.

```javascript
function addUpTo(n) {
	return (n * (n + 1)) / 2;
}
```

by adding performance code block, we are able to calculate the speed at which each function runs.

```javascript
var time1 = performance.now();
addUpTo(1000000000);
var time2 = perfoemance.now();
console.log(`Time elapsed: ${(time1 - time2) / 1000} seconds.`);
```

A. completes in 1.24160000...

B. completes in 0.00010000...

while timing the code is good, there are problems with relying on just this.

### The Problem with Time

---

- different machines will record different times
- the same machine can record varying times
- for very fast algos, speed may not be precise enough

### Instead we count the number of simple operations

---

looking again at the previous problem

A.

```javascript
function addUpTo(n) {
	let total = 0;
	// 1 assignment
	for (let i = 1; i <= n; i++) {
		// 1 assignment
		// n additions (i++)
		// n assignment (i++)
		// n comparisons (i <= n)
		total += i;
		// n additions (n=5 means 5 additions)
		// n assignment (n=5 means 5 equals)
	}
	return total;
}
// total operations 5n+2
```

B.

```javascript
function addUpTo(n) {
	return (n * (n + 1)) / 2;
	// 1 multiplication
	// 1 addition
	// 1 division
}
// total operations 3
```

However, it doesn't really matter, because what we care about is a general trend. As n grows, the number of operations grow roughly in proportion to n.

# The Big O

---

A way to formalize "fuzzy" counting. We don't really care about the details, only the broad trend

> An algorithm is O(f(n)) if the number of simple operation the computer must to is eventually less than a constant time f(n), as n increases.

(function(input n) = output)

- f(n) could be linear. (f(n)=n)
- f(n) could be quadratic. (f(n)=n^2)
- f(n) could be constant. (f(n)=1)
- f(n) could be something entirely different.

A.

```javascript
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
// O(n), linear time
```

B.

```javascript
function addUpTo(n) {
	return (n * (n + 1)) / 2;
}
// O(1), constant time
```

## Another Example - 2 loops

```javascript
function countUpAndDown(n) {
	console.log("Going up.")
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  // O(n)
  console.log("Now back down.")
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  // O(n)
  console.log("Back at the bottom.")
  }
}
// O(n), it scales to n.
```

## Another Example - nested loop

```javascript
function printAllPairs(n) {
	for (var i = 0; i < n; i++) {
		// O(n)
		for (var j = 0; j < n; j++) {
			//O(n)
			console.log(i, j);
		}
	}
}
// O(n^2), exponentially grows with n
```

## Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing element in an array (by index) is constant
4. Loop, complexity is the length of the loop

## More Examples

```javascript
function logAtLeast5(n) {
	for (var i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}
// O(n) because the smaller numbers don't matter
```

```javascript
function logAtMost5(n) {
	for (var i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}
// O(1) because as n grows, the amount does not
```

# Space Complexity

Big O was focusing on the amount of time it takes, Space Complexity (or auxiliary space complexity) refers to the memory it uses to run.

- Primitives are constant space
- Strings require O(n) space where n is the string length
- Refrence types are generally O(n) where n is length (for arrays) or the number of keys (for objects)
  - ex. if Arr1 has a length of 2 and Arr2 has a length of 4, Arr2 takes up 2x as much space

## Examples

```js
function sum(arr) {
	let total = 0
	// total = 0 is a number declaration
	for (let i = 0 i; < arr.length; i++) {
		// i = 0 is another number declaration
		total += arr[i];
	}
	return total;
}
// O(1) space, always only 2 delcarations
```

```js
function double(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
}
// O(n) space, as arr grows so does the length of newArr
```

# Logarithms

A log is the inverse of exponential equations

O(log n) is great! While not as good as constant time, it is close.

## Where is this found

- Certain searching algorithms have log time complexity
- Sorting algorithms
- Recursion sometimes uses log as well

---

![BigO](https://miro.medium.com/max/1400/1*yiyfZodqXNwMouC0-B0Wlg.png)
