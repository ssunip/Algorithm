// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0];

solution(input);

function solution(str) {
  let lowStr = str.toLowerCase(); 
  let obj = {}; 

  for (let i = 0; i < lowStr.length; i++) {
    if (obj[lowStr[i]] === undefined) {
      obj[lowStr[i]] = 1; 
    } else {
      obj[lowStr[i]] += 1;
    }
  }

  let result = "";
  let count = 0;

  for (char in obj) {
    if (obj[char] > count) {
      count = obj[char];
      result = char.toUpperCase();
    } else if (obj[char] === count) {
      result = "?";
    }
  }
  console.log(result);
}
