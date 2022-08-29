let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 데이터 정제과정. fs모듈 사용하여 txt 파일 읽어오고, 문자로 변환

input = input[0];
input = input.split(" ").map(Number);

solution(input[0], input[1]);

function solution(a, b) {
  console.log(a * b);
}
