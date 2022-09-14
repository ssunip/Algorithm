let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

let cases = +input.shift();

for (let i = 0; i < cases; i++) {
  let line = input[i].split(); // 엔터를 기준으로 배열로 나누기
  let studentScore = line[0].split(" "); // 배열 내부의 덩어리 string을 요소 1개씩으로 나눠주기
  let studentNum = +studentScore.shift(); // 첫 숫자를 추출하여 타입을 숫자로 바꾸기 -> 반복문에 사용
  studentScore = studentScore.map(Number); // 배열 전체의 타입을 숫자로 바꾸기
  // 평균 구하기 -> 반복문으로 배열의 요소를 다 더해준 뒤, 학생 수로 나누기
  let sum = 0;
  let avg = 0;
  for (let j = 0; j < studentNum; j++) {
    sum += studentScore[j];
    avg = sum / studentNum;
  }
  // 이제 학생들의 점수와 평균점수를 비교하여, 평균 점수보다 큰 학생을 추출
  let highScore = studentScore.filter((score) => score > avg);
  // 평균보다 높은 점수를 받은 학생 수 / 전체 학생 수
  let ans = (highScore.length / studentNum) * 100;
  console.log(ans.toFixed(3) + "%");
}
