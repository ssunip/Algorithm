// <

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);

solution(input[0], input[1]);

function solution(a, b) {
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else if (a === b) {
    console.log("==");
  }
}
