function validAnagram(first, second) {
	//if the lengths don't match
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {}; // or "counter"

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		//if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	console.log(lookup);

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		//cant find letter or if letter is zero, it is not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
}

validAnagram('anagram', 'nagaram');
