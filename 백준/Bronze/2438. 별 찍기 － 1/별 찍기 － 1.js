let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = +input;
solution(input);

function solution(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`*`.repeat(i));
  }
}
