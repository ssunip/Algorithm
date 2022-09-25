let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cases = +input[0];
input.shift();

solution(cases, input);

function solution(cases, word) {
  let count = 0;

  for (let i = 0; i < cases; i++) {
    let result = [];
    let isGroupWord = true;

    for (let j = 0; j < word[i].length; j++) {
      if (result.indexOf(word[i][j]) === -1) {
        result.push(word[i][j]);
      } else {
        if (result.indexOf(word[i][j]) !== result.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }
    if (isGroupWord) {
      count++;
    }
  }
  console.log(count);
}