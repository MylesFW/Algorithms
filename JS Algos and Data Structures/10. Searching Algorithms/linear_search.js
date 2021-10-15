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
