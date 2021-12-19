const lanternFish = [
	3, 4, 1, 2, 1, 2, 5, 1, 2, 1, 5, 4, 3, 2, 5, 1, 5, 1, 2, 2, 2, 3, 4, 5, 2,
	5, 1, 3, 3, 1, 3, 4, 1, 5, 3, 2, 2, 1, 3, 2, 5, 1, 1, 4, 1, 4, 5, 1, 3, 1,
	1, 5, 3, 1, 1, 4, 2, 2, 5, 1, 5, 5, 1, 5, 4, 1, 5, 3, 5, 1, 1, 4, 1, 2, 2,
	1, 1, 1, 4, 2, 1, 3, 1, 1, 4, 5, 1, 1, 1, 1, 1, 5, 1, 1, 4, 1, 1, 1, 1, 2,
	1, 4, 2, 1, 2, 4, 1, 3, 1, 2, 3, 2, 4, 1, 1, 5, 1, 1, 1, 2, 5, 5, 1, 1, 4,
	1, 2, 2, 3, 5, 1, 4, 5, 4, 1, 3, 1, 4, 1, 4, 3, 2, 4, 3, 2, 4, 5, 1, 4, 5,
	2, 1, 1, 1, 1, 1, 3, 1, 5, 1, 3, 1, 1, 2, 1, 4, 1, 3, 1, 5, 2, 4, 2, 1, 1,
	1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 5, 4, 1, 3, 3, 5, 3, 2, 5, 5, 2, 1, 5, 2, 4,
	4, 1, 5, 2, 3, 1, 5, 3, 4, 1, 5, 1, 5, 3, 1, 1, 1, 4, 4, 5, 1, 1, 1, 3, 1,
	4, 5, 1, 2, 3, 1, 3, 2, 3, 1, 3, 5, 4, 3, 1, 3, 4, 3, 1, 2, 1, 1, 3, 1, 1,
	3, 1, 1, 4, 1, 2, 1, 2, 5, 1, 1, 3, 5, 3, 3, 3, 1, 1, 1, 1, 1, 5, 3, 3, 1,
	1, 3, 4, 1, 1, 4, 1, 1, 2, 4, 4, 1, 1, 3, 1, 3, 2, 2, 1, 2, 5, 3, 3, 1, 1,
];

let myBuckets = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Sort initial fish into their bucket, dependant on day in cycle
for (let i = 0; i < lanternFish.length; i++) {
	const val = lanternFish[i];
	myBuckets[val]++;
}

//Refresh the buckets and add the baby Laternfish to bucket 8
let day = 0;

while (day < 256) {
	let zeroBucket = myBuckets.shift();
	myBuckets[6] += zeroBucket;
	myBuckets[8] = zeroBucket;
	day++;
}

//Sum the total number of Lanternfish in my buckets
const totalFish = myBuckets.reduce((acc, c) => (acc += c), 0);
console.log(totalFish);
