let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];

solution(input);

function solution(str) {
  let num = 0;
  if (str === "") {
    console.log(num);
  } else {
    let arr = str.split(" ");
    num = arr.length;
    console.log(num);
  }
}
