let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);

solution(input);

function solution(num) {
  let cases = num[0];
  num.shift();

  let numbers = num.sort((a, b) => a - b);

  for (let i = 0; i < cases; i++) {
    console.log(numbers[i]);
  }
}