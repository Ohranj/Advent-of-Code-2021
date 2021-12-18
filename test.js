const array = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//a = 0,9 -> 5,9
//b = 8,0 -> 0,8 - IGNORED BECAUSE X1 != X2 or Y1 != Y2
//c = 9,4 -> 3,4
//d = 2,2 -> 2,1
//e = 7,0 -> 7,4

const inputs = [
	{ x1: 0, y1: 9, x2: 5, y2: 9 },
	{ x1: 9, y1: 4, x2: 3, y2: 4 },
	{ x1: 8, y1: 0, x2: 0, y2: 8 },
	{ x1: 2, y1: 2, x2: 2, y2: 1 },
	{ x1: 7, y1: 0, x2: 7, y2: 4 },
	{ x1: 6, y1: 4, x2: 2, y2: 0 },
	{ x1: 0, y1: 9, x2: 2, y2: 9 },
	{ x1: 3, y1: 4, x2: 1, y2: 4 },
	{ x1: 0, y1: 0, x2: 8, y2: 8 },
	{ x1: 5, y1: 5, x2: 8, y2: 2 },
];

const map = inputs.reduce((acc, { x1, x2, y1, y2 }) => {
	if (x1 == x2 || y1 == y2) {
		acc[y1][x1] += 1;
		acc[y2][x2] += 1;
		if (y1 == y2) {
			const sortedArray = [x1, x2].sort();
			for (let i = sortedArray[0] + 1; i < sortedArray[1]; i++) {
				acc[y1][i] += 1;
			}
		} else {
			const sortedArray = [y1, y2].sort();
			for (let i = sortedArray[0] + 1; i < sortedArray[1]; i++) {
				acc[i][x1] += 1;
			}
		}
	}
	return acc;
}, array);

const overlap = map.flat().filter((x) => {
	if (x >= 2) {
		return x;
	}
}).length;
console.log(map);
console.log(overlap);
