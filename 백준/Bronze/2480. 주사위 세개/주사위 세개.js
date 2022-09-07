let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);
input = input.sort((a, b) => b - a); // 큰 순서대로 정렬. 제일 큰 수가 첫번쨰로 오게 된다.

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
  let prize = 0;

  if (a === b && b === c) {
    prize = 10000 + a * 1000;
  } else if (a === b || b === c) {
    prize = 1000 + b * 100;
  } else if (a === c) {
    prize = 1000 + c * 100;
  } else {
    prize = a * 100;
  }
  console.log(prize);
}
