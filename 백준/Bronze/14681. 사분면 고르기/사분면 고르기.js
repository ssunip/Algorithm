const { type } = require("os");

let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);
solution(input[0], input[1]);

function solution(a, b) {
  if (a > 0 && b > 0) {
    console.log(1);
  } else if (a < 0 && b > 0) {
    console.log(2);
  } else if (a < 0 && b < 0) {
    console.log(3);
  } else if (a > 0 && b < 0) {
    console.log(4);
  }
}
