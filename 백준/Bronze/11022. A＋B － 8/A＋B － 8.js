let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(arr) {
  let num = +arr[0];
  //console.log(num);

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let numArr = arr[i].split(" ").map(Number);
    sum = numArr[0] + numArr[1];
    console.log(`Case #${i}: ${numArr[0]} + ${numArr[1]} = ${sum}`);
  }
}