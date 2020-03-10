function minMaxSum(arr) {
 let sortedArr = arr.sort((a, b)=> a-b);
 let max = sortedArr[1] + sortedArr[2] + sortedArr[3] +sortedArr[4];
 let min = sortedArr[0] + sortedArr[1] + sortedArr[2] +sortedArr[3];

 return min + " " + max;
}

console.log(minMaxSum([1, 2, 3, 4, 5]));