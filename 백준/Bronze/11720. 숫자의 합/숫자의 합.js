let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cases = +input[0];
let num = input[1];

solution(cases, num);

function solution(cases, num) {
  let sum = 0;
  for (let i = 0; i < cases; i++) {
    sum += parseInt(num[i]);
  }
  console.log(sum);
}
