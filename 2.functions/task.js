function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
		if (arr[i] > max) max = arr[i];

		sum += arr[i]
	}

	const meaningAvg = sum / arr.length;
	const avg = Number(meaningAvg.toFixed(2))

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];
	if (arr.length === 0) return 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
		if (arr[i] > max) max = arr[i];
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let evenSum = 0;
	let oddSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) evenSum += arr[i];
		if (arr[i] % 2 !== 0) oddSum += arr[i];
	}

	return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
	let evenSum = 0;
	let evenCount = 0;

	if (arr.length === 0) return 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenSum += arr[i]
			evenCount++
		}
	}

	return evenSum / evenCount
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		let result = func(...arr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}