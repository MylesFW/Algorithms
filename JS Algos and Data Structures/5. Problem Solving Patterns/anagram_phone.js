// Create a function that takes in 2 phone numbers and will determine if they consist of the same digits

// sudo
// test the lengths of each num
// create an object counter
// loop through num 1 and set the object counter
// loop through num 2 and subtract from the num counter

function phoneNumbers(num1, num2) {
	if (num1.length !== num2.length) {
		console.log('false');
		return false;
	}

	let counter = {};

	for (i = 0; i < num1.length; i++) {
		let digit = num1[i];
		counter[digit] ? (counter[digit] += 1) : (counter[digit] = 1);
		// ^ already exist?   ^ Then add 1.        ^ otherwise set to 1
	}

	for (i = 0; i < num2.length; i++) {
		let digit = num2[i];
		if (!counter[digit]) {
			console.log('false');
			return false;
		} else {
			counter[digit] -= 1;
			console.log(counter);
		}
	}
	console.log('true');
	return true;
}

phoneNumbers('2064500831', '0831045602'); //true
