// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let total = +input[0];
let arr = input[1].split(" ").map(Number); // 배열 완성

solution(total, arr);

function solution(total, arr) {
  // let sort = arr.sort((a, b) => a - b); // sort로 정렬
  // console.log(`${sort[0]} ${sort[total - 1]}`);

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(`${min} ${max}`);
}