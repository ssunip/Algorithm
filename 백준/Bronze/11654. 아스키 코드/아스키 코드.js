let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
//console.log(input);

solution(input);

function solution(str) {
  console.log(str.charCodeAt(0));
}
