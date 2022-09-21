let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ");
firstNum = input[0];
secondNum = input[1];

// 두 숫자를 거꾸로 바꾸기
let reverseFirstNum = +firstNum.split("").reverse().join("");
let reverseSecondNum = +secondNum.split("").reverse().join("");
// 그 다음 두 숫자를 비교해서 큰 수를 리턴
reverseFirstNum > reverseSecondNum
  ? console.log(reverseFirstNum)
  : console.log(reverseSecondNum);