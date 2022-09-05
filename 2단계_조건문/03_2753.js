// 윤년이면 1, 아니면 0을 출력하는 프로그램
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);
solution(input[0]);

function solution(a) {
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log(1);
    return;
  }
  console.log(0);
}
