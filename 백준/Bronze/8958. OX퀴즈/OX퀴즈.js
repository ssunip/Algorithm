let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let test = +input.shift();

for (let i = 0; i < test; i++) {
  let [target] = input[i].split();

  let sum = 0;
  let currentValue = 0;

  for (let j = 0; j < target.length; j++) {
    if (target[j] === "O") {
      currentValue++;
    }
    if (target[j] === "X") {
      currentValue = 0;
    }
    sum += currentValue;
  }
  console.log(sum);
}
