function countDown(num) {
  console.log(num);
  if (num > 0) {
    return countDown(num - 1);
  }
}

// console.log(countDown(10));

function recursiveAddition(arr) {
  // console.log(arr);
  if (arr.length === 0) return 0;
  const shifted = arr.shift();
  return shifted + recursiveAddition(arr);
}

// console.log(recursiveAddition([2, 4, 6]));

function maxNumber(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  const subMax = maxNumber(arr.slice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

console.log(maxNumber([2, 7, 9, 1, 3, 5]));
