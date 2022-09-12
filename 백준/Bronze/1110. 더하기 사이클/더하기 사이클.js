// 각 자리의 수를 구하는 수식
// 10의 자리의 수: Math.floor(n/10)
// 1의 자리의 수: n%10
// 1의 자리의 수를 10의 자리의 수로 바꾸기: (n%10) * 10

let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = +input[0]; // input을 숫자로 바꿔줌

let num = input;
let sum = 0;
let count = 0;

while (true) {
  count++; // 반복문 돌리는 횟수 카운트

  sum = Math.floor(num / 10) + (num % 10); // sum = 2 + 6 = 8
  num = (num % 10) * 10 + (sum % 10); // num = 60 + 8 = 68

  if (input === num) {
    // 입력값과 num이 같아질때 break로 반복문 탈출
    break;
  }
}
console.log(count); // 카운트 출력
