let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../example.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 데이터 정제과정. fs모듈 사용하여 txt 파일 읽어오고, 문자로 변환

console.log(input); // input: txt파일을 배열 속의 문자열로 가져옴
input = input[0];
console.log(input, typeof input); // input: 배열에서 꺼내옴. 여전히 문자열
input = input.split(" ").map(Number);
console.log(input, typeof input[0]); // input: split으로 공백을 기준으로 나눠줌. 타입은 숫자

solution(input[0], input[1]); // a와 b의 인자로 1, 2가 들어감

function solution(a, b) {
  console.log(a + b);
}
