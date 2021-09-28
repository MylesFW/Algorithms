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
