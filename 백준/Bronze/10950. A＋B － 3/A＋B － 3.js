let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(arr) {
  arr.shift();

  for (let i = 0; i < arr.length; i++) {
    result = arr[i].split(" ").map(Number);
    console.log(result[0] + result[1]);
  }
}