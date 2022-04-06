function countDown(num) {
  console.log(num);
  if (num === 1) return "";
  else return countDown(num - 1);
}

console.log(countDown(10));
