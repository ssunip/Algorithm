//킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);
console.log(input, typeof input[0]);

solution(input[0], input[1], input[2], input[3], input[4], input[5]);

function solution(a, b, c, d, e, f) {
  console.log(1 - a, 1 - b, 2 - c, 2 - d, 2 - e, 8 - f);
}
