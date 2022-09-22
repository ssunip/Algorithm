let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input[0].split("");

let alphabet = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

solution(input);

function solution(str) {
  let num = str.length;

  // 알파벳 배열을 이중 반복문으로 돌아주기
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < alphabet[i].length; j++) {
      // str에서 for of문 사용해서 반복문 돌기
      for (x of str) {
        if (alphabet[i][j] === x) {
          // i에 +2를 해서 다이얼 숫자에 맞춰주기
          num += i + 2;
        }
      }
    }
  }
  console.log(num);
}