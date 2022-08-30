//joonas??!

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

//console.log(input);
input = input[0];
//console.log(input, typeof input);
//input = input.split(" ").map(Number);
//console.log(input);

solution(input);

function solution(a) {
  console.log(`${a}??!`);
}
