//depths = Fetched data
let countIncreases = 0;

for (let i = 1; i < depths.length; i++) {
	const currentDepth = Number(depths[i]);
	const nextDepth = Number(depths[i - 1]);

	if (currentDepth > nextDepth) {
		countIncreases++;
	}
}

console.log(countIncreases);
