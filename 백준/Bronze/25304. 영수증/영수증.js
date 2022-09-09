let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

//console.log(input);

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for (let i = 2; i <= cnt + 1; ++i) {
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");