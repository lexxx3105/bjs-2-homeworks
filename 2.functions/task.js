function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];

    sum += arr[i]
  }

  const meaningAvg = sum / arr.length;
  const avg = Number(meaningAvg.toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0, oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return Math.abs(evenSum - oddSum);
}

function averageEvenElementsWorker(...arr) {
  let count = arr.filter(x => x % 2 === 0).length;
  let avg = (arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0)) / count;
  return avg;
}

function makeWork (arrOfArr, func) {

}
