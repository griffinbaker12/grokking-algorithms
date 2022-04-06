// Sum an array recursively
function sum(arr) {
  if (arr.length == 1) return arr[0];
  return arr.shift() + sum(arr);
}

// console.log(sum([1, 2, 3, 4]))

function recursiveCount(arr) {
  if (arr.length == 1) {
    return 1;
  }
  arr.shift();
  return 1 + recursiveCount(arr);
}

// console.log(recursiveCount([1, 2, 3, 4, 8, 5]));

function maxNumber(arr, max = arr[0]) {
  console.log(max, arr.length);
  if (arr.length === 0) {
    return max;
  }

  // Mutates array as we want and need it to do
  const nextNum = arr.shift();

  if (max < nextNum) {
    max = nextNum;
  }

  // Gets passed the new array and then the max, if it needed to be updated or not
  return maxNumber(arr, max);
}

// console.log(maxNumber([1, 2, 3, 4, 8, 5]));

// Binary search
function binarySeach(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let guess = Math.floor((high + low) / 2);
    if (array[guess] == target) {
      return guess;
    } else if (target > guess) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }
}

// console.log(binarySeach([1, 3, 5, 7, 9], 9));

function recursiveBinarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);

  console.log(arr);

  if (target == arr[mid]) return mid;
  else if (target > arr[mid]) {
    return mid + recursiveBinarySearch(arr.slice(mid), target);
  } else if (target < arr[mid]) {
    return recursiveBinarySearch(arr.slice(0, mid), target);
  }

  return false;
}
// console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 7));

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    // Choosing the first element everytime in this implementation
    const pivot = Math.floor(arr.length / 2);
    const less = [],
      greater = [];
    arr.splice(pivot, 1);
    // console.log(updatedA, arr);
    arr.forEach((el) => {
      if (pivot <= el) greater.push(el);
      else less.push(el);
    });
    console.log(less, greater);
    return quicksort(less) + [pivot] + quicksort(greater);
  }
}

console.log(quicksort([1, 3, 5, 9, 7]));
