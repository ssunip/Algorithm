let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(arr) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr = arr[i].split(" ").map(Number);
    sum = newArr[0] + newArr[1];
    console.log(sum);
  }
}