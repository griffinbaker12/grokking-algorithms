// Receive an array and an item and then return the index of that item in the array if it exists, null otherwise
function binarySearcy(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    if (guess < item) low = mid + 1;
  }
  return null;
}

console.log(binarySearcy([1, 3, 5, 7, 9], 9));
