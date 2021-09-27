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
