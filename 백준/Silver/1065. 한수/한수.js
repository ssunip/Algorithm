let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = +input[0];

solution(input);

function solution(a) {
  let arr = [];

  for (let i = 1; i <= a; i++) {
    // 1~9는 비교가 불가능. 등차수열이 없으니 arr에 추가. 10~99는 등차수열이 한가지 경우. 비교가 불가능하니 arr에 추가
    let N = 0;
    let str = String(i);

    if (str.length < 3) {
      N = +str;
      arr.push(N);
    } else if (str.length === 3) {
      // 100~1000은 비교 가능. 각 자리수의 공차를 구하고, 공차가 같은 경우에만 arr에 추가
      for (let j = 0; j < str.length; j++) {
        if (str[j] - str[j + 1] === str[j + 1] - str[j + 2]) {
          // 세자리수일때
          N = +str;
          arr.push(N);
        }
      }
    }
  }
  console.log(arr.length);
}
