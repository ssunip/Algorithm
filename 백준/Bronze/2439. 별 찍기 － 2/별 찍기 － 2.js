let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = +input;
solution(input);

function solution(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    // 공백 4개, 별 1개
    // 공백 3개, 별 2개
    // 공백 2개, 별 3개 ...
    result = " ".repeat(num - i) + "*".repeat(i);
    console.log(result);
  }
}