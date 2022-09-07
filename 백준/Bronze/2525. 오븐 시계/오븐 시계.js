let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input1 = input[0];
input2 = input[1];
input1 = input1.split(" ").map(Number);
input2 = parseInt(input2);

solution(input1[0], input1[1], input2);

function solution(a, b, c) {
  // 시간 관련된 문제는 60분을 기준으로 생각하자.
  // 시간에 60을 곱하고 분과 걸리는 시간을 더해 몫은 시간으로, 나머지는 분으로 계산

  let time = Math.floor((a * 60 + b + c) / 60);
  let minute = (a * 60 + b + c) % 60;

  if (time >= 24) {
    time = time - 24;
  }

  console.log(time, minute);
}
