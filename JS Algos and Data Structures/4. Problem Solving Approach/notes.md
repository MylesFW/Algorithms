# Algos and Problem Solving Strategies

1. **Devise a plan for solving problems**
2. Master common problem solving patterns

### Problem Solving

- understand the problem
- explore concrete examples
- break it down
- solve/simplify
- look back and refactor

## 1) Understanding the Problem

---

1. Can I restate the problem back in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that the solutions gives?
4. Can the Output be determined from the inputs?
   - do I have enough info to solve the problem?
5. How should I label important pieces of data?

### Example

> Write a function that takes two numbers and returns their sum.

1. Write a function that adds 2 numbers
2. Is it a float? Int? What about edge cases?
3. Is it returning a float? Int?
4. What if only one number is passed in? Return 0? This is a question for the interviewer
5. Name the function "add"

## 2) Exploring Concrete Examples

---

helps understanding the problem and provide sanity checks

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

### Example

> Write a function that takes in a string and returns counts of each character in the string.

```js
//1.
charCount('aaaa'); // {a:4}
//2.
charCount('hello'); // {h:1, e:1, l:2, o:1}
//3.
('my phone number is 1654'); // invalid phone number?
('Hello hi'); // {h:2} or {H:1, h:1}?
//4.
charCount(''); // what is returned from an empty string?
```

## 3) Breaking it Down

---

sudo code the problem

### Example

> Write a function that takes in a string and returns counts of each character in the string.

```js
// ex. charCount("Your PIN is 1234!")
// ans. {1:1, 2:1, 3:1, 4:1, "y":1, "o":1, "u":1, ... }

function charCount(str) {
	// make object to return
	// loop over string, for each char...
	// if the char is a num/letter AND is a key in obj, count++
	// if char is a num/letter AND not in obj, add and set value to 1
	// if char is something else (space, period, etc.) do nothing
	// return object
}
```

## 4) Solve or Simplify

---

solve the problem if you can- if you cant, solve a simpler problem

1. Find the core difficulty in what you're doing
2. Ignore that difficulty
3. Writed a simplified solution
4. Then add that difficulty back in

### Example

> Write a function that takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
	// make object to return
	var result = {};
	// loop over string, for each char...
	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();
		// if the char is a num/letter AND is a key in obj, count++
		if (result[char] > 0) {
			result[char]++;
			// if char is a num/letter AND not in obj, add and set value to 1
		} else {
			result[char] = 1;
		}
	}
	// if char is something else (space, period, etc.) do nothing
	// *** if stuck here ^ solve as much as possible. ask the interviewer perhaps

	// return object
	return result;
}
```

## 5) Look Back and Refactor

---

after completed, ask these questions

1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

### Example

Original Solution

```js
function charCount(str) {
	var result = {};
	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			if (result[char] > 0) {
				result[char]++;
			} else {
				result[char] = 1;
			}
		}
	}
	return result;
}
```

Refactored Solution - While larger, it is quicker.

```javascript
function charCount(str) {
	var result = {};
	for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
			result[char] = ++result[char] || 1;
		}
	}
	return result;
}

// charCodeAt(0) uses the "character dictionary" which is faster than using regular expression

function isAlphaNumeric(char) {
  vard code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // tests 0-9
      !(code > 64 && code < 91) && // tests A-Z
      !(code > 96 && code < 123)) { // tests a-z
        return false
      }
      return true
}
```
