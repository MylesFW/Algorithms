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
