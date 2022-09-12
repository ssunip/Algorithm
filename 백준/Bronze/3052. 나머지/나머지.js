// 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다

let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number); // 타입을 숫자로 변환

let arr = input.map((el) => el % 42); // 각 요소에 % 연산자를 사용하여 42로 나눈 나머지를 배열로 변환
let set = new Set(arr); // 중복을 허용하지 않는 set 자료구조를 사용하여 중복을 제거. new Set은 배열의 데이터가 추가된 Set객체가 생성
//set = [...set]; => set객체를 배열로 바꾸고싶으면 spread 를 사용하면 됨

console.log(set.size);