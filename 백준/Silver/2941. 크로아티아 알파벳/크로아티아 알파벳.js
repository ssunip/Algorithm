let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];

let croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

solution(input);

function solution(str) {
  for (let alphabet of croatiaAlphabet) {
    str = str.split(alphabet).join("Q");
  }
  console.log(str.length);
}