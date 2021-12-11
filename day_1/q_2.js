//depths = Fetched data
let currentDepth = 0;
let tally = -1;

do {
	const sumOf = depths.slice(0, 3).reduce((acc, c) => (acc += Number(c)), 0);
	if (sumOf > currentDepth) {
		tally += 1;
	}
	depths.splice(0, 1);
	currentDepth = sumOf;
} while (depths.length > 2);

console.log(tally);
