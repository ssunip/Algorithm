let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];

input = input.split(" ").map(Number);

solution(input[0], input[1]);

function solution(a, b) {
  if (45 <= b && 60 > b) {
    // b가 45보다 크고 60보다 작을 때 -> b-45
    b = b - 45;
  } else if (45 > b) {
    // b가 45보다 작을 때 -> a-1, b+15
    a = a - 1;
    b = b + 15;
  }
  if (a < 0) {
    // a가 0일때 -> a = 24
    a = 23;
  }
  console.log(a, b);
}
