let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let T = +input[0];
input.shift();

for (let i = 0; i < T; i++) {
  let el = input[i].split(" ");
  let repeatNum = +el[0];
  let char = el[1].split("");

  let P = "";
  for (let j = 0; j < char.length; j++) {
    P += char[j].repeat(repeatNum);
  }
  console.log(P);
}