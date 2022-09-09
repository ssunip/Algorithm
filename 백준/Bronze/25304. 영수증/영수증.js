let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(arr) {
  let total = parseInt(arr.shift());
  let number = parseInt(arr.shift());

  let sum = 0;
  for (let i = 0; i < number; i++) {
    // 1. 반복문으로 각 요소마다 split으로 나눠주고 숫자로 바꾸기
    let newArr = arr[i].split(" ").map(Number);
    // 2. 각 배열의 가격과 갯수를 곱한 후, 다 더해주기
    sum = sum + newArr[0] * newArr[1];
  }
  total === sum ? console.log("Yes") : console.log("No");
}