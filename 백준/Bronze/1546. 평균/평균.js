let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let num = +input[0];
let score = input[1].split(" ").map(Number);

let max = Math.max(...score);
let newScore = score.map((el) => (el / max) * 100);
let sum = 0;
for (let i = 0; i < newScore.length; i++) {
  sum = sum + newScore[i];
}
let avg = sum / num;
console.log(avg);