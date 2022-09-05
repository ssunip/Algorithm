// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];
input = input.split(" ").map(Number);
solution(input[0]);

function solution(a) {
  if (90 <= a && a <= 100) {
    console.log("A");
  } else if (80 <= a && a < 90) {
    console.log("B");
  } else if (70 <= a && a < 80) {
    console.log("C");
  } else if (60 <= a && a < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}
