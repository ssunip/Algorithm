let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);

let max = Math.max(...input);
let index = input.indexOf(max);
console.log(max);
console.log(index + 1);