let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);

solution(input[0]);

function solution(a) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
}