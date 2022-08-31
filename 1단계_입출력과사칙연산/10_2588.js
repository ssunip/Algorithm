let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "example.txt")
  .toString()
  .trim()
  .split("\n");

a = input[0];
b = input[1];

solution(a, b);

function solution(a, b) {
  let fir = a * b[2];
  let sec = a * b[1];
  let thr = a * b[0];
  console.log(fir);
  console.log(sec);
  console.log(thr);
  console.log(a * b);
}
