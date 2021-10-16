// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
//*********************************************************************************************
function squareDigits(num) {
	let string = num.toString(); // convert number to a string
	let arr = []; // empty array to contain new values
	for (let i = 0; i < string.length; i++) {
		// loop through string
		arr[i] = string[i] * string[i]; // save the square of the number to the array
	}
	return Number(arr.join('')); // turn the array into a string and then into a number
}
console.log(squareDigits(2112));
