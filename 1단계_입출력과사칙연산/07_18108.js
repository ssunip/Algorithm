//불기 연도를 서기 연도로 변환한 결과를 출력한다.

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);
//console.log(input);

solution(input);

function solution(a) {
  console.log(a - 543);
}
