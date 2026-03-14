const { parentPort, workerData } = require('worker_threads');

function computeSum(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

const result = computeSum(workerData);

parentPort.postMessage(result);

