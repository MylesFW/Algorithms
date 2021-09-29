// Solution using a Helper Method

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

collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

// Solution using Pure Recursion

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
