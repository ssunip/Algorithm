let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(arr) {
  let num = +arr[0];

  let ans = "";
  for (let i = 1; i <= num; i++) {
    let numArr = arr[i].split(" ").map(Number);
    ans += numArr[0] + numArr[1] + "\n";
  }
  console.log(ans);
}