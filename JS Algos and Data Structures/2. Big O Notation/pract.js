// function 1
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
var time1 = performance.now();
addUpTo(1000000000);
var time2 = perfoemance.now();
console.log(`Time elapsed: ${(time1 - time2) / 1000} seconds.`);
// runs in 1.2416000000084

// function 2
function addUpTo(n) {
	return (n * (n + 1)) / 2;
}
var time1 = performance.now();
addUpTo(1000000000);
var time2 = perfoemance.now();
console.log(`Time elapsed: ${(time1 - time2) / 1000} seconds.`);
// runs in 0.0001000000047
