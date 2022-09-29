let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);

solution(input);

function solution(num) {
  num.shift();

  let numbers = num.sort((a, b) => a - b);
  let result = "";

  numbers.forEach((el) => (result += `${el}\n`));

  console.log(result);
}