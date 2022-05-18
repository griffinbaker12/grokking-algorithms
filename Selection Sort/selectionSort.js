// Sort an array from smallest to largest
function selectionSort(arr) {
  const originalLength = arr.length;
  const newA = [];
  for (let i = 0; i < originalLength; i++) {
    const smallestI = findSmallest(arr);
    newA.push(arr.splice(smallestI, 1));
  }
  return newA;
}

function findSmallest(arr) {
  let smallestI = 0;
  let smallestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestI = i;
      smallestNum = arr[i];
    }
  }
  return smallestI;
}

console.log(selectionSort([6, 3, 1, 5, 3, 9, 6, 7]));
