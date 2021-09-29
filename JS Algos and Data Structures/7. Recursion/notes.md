# Recursion

Recursion is a process (or function) that calls itself. Sometimes a cleaner alternative to iteration and is often seen handling more complex data structures.

### The Call Stack

It's a stack data structure
Anytime a sunction is invoked it is places (pushed) to the top of the call stack
When JS sees the return keyword (or the function ends) the compiler will be removed (popped)

### Example of a Call Stack

```js
function takeShower() {
	return 'showering...';
}

function eatBreakfast() {
	let meal = cookFood();
	return `Breakfast: ${meal} and a cup of Coffee`;
}

function cookFood() {
	let options = ['Toast', 'Eggs', 'Bacon'];
	return options[Math.floor(Math.random() * options.length)];
}

function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log("Now I'm off to work!");
}

wakeUp();

// + wakeUp()
//    + takeShower()
//    - takeShower()
//    + eatBreakfast()
//          + cookFood()
//          - cookFood()
//    - eatBreakfast()
// - wakeUp()
//functions are added to the list in order, and removed from the top of the stack
```

### Base Case is the condition that tell the recursion ends (think a while loop)

### Examples

Simple recursion example

```js
function countDown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	//Base Case ^, when num = 0, return
	console.log(num);
	num--;
	countDown(num);
}

countDown(3);
```

```js
function sumRange(num) {
	if (num === 1) {
		return 1;
	}
	return num + sumRange(num - 1);
}

sumRange(3);
// ans = 6

//first recursion

// function sumRange(3) {
// 	if (3 === 1) {
// 		return 1;
// 	}
// 	return 3 + sumRange(2);
// }

//second recursion

// function sumRange(2) {
// 	if (2 === 1) {
// 		return 1;
// 	}
// 	return 2 + sumRange(1);
// }

//final recursion

// function sumRange(1) {
// 	if (1 === 1) {
// 		return 1;
// 	}
// 	return 2 + 1;
// }
```

each time return num + sumRange(num - 1) is run, it must wait to know what sumRange(num - 1) is. Each stack is added until the basecase is met when num = 1. It then ripples back down the stack solving for one stack which gives the answer that is used to solve the next stack... until ripples all the way back to the original stack.

### Common Pitfalls

- No base case, or wrong base case
  - It never ends
  - Error "maximum call stack size exceeded"
- Forgetting to return
  - Using console.log instead of return
  - Recursive return doesn't change the data

```js
function factorial(num) {
	if (num === 1) console.log(1);
	return num * factorial(num - 1);
	//console.logs 1, but doesn't return afterwards
}

function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num);
	//never reaches the return because the data never changes
}
```

## Helper Method Recursion

A main outer function that is not recursive and contains another function that is recursive.

> Create a function that takes in an array and returns a new array containing only the odd numbers

This way is easier to understand, however it is not the "pure" recusive way. That doesn't mean one is better than the other, it's just a different way of doing it!

```js
function collectOdds(arr) {
	let result = [];
	function helperMethod(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
			//if its odd, remove from input array, push to result array
		}
		helperMethod(helperInput.slice(1));
		//if its even, remove from input array
	}
	helperMethod(arr);
	return result;
}

collectOdds([1, 2, 3, 4, 5]);
```

Pure Recusive Solution

```js
function collectOdds(arr) {
	let newArr = [];
	if (arr.length === 0) {
		return newArr;
	}
	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
		//check if the first number is odd
	}
	newArr = newArr.concat(collectOdds(arr.slice(1)));
	//concat is required, otherwise it would overwrite the newArr everytime
	return newArr;
}

collectOdds([1, 2, 3, 4, 5]);

//	[1].concat(collectOdds([2, 3, 4, 5]))
//		[].concat(collectOdds([3, 4, 5]))
//			[3].concat(collectOdds([4, 5]))
//				[].concat(collectOdds([5]))
//					[5].concat(collectOdds([]))
//						[5] was waiting to concat with whatever collectOdds returned.
//						Now that the legth of newArr === 0, it ripples back, pluggin in the previous array.
//					[5].concat([]) => [5]
//				[].concat([5]) => [5]
//			[3].concat([5]) => [3, 5]
//		[].concat([3, 5]) => [3, 5]
//	[1].concat([3, 5]) => [1, 3, 5]
```

Pure Recursion tips:

- When dealing with arrays, methods like .slice(), spread, and .concat() will create copies of the arrays you're using so that the original is not mutated.
- Strings are immutable so will need methods like .slice, substr, or subtring to make copies of strings.
- To copy and Object, use Object.assign, or the spread operator
