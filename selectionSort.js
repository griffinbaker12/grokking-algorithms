// Sort an array from smallest to largest
function selectionSort(arr) {
  let a = [];
  let originalLength = arr.length;
  for (let i = 0; i < originalLength; i++) {
    const indexToRemove = findSmallestIndex(arr);
    a.push(arr.splice(indexToRemove, 1)[0]);
  }
  return a;
}

// Find the smallest item n times, hence O(n^2)
function findSmallestIndex(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

console.log(selectionSort([6, 3, 1, 5, 3, 9, 6, 7]));
