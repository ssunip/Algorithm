let input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "example.txt")
  .toString()
  .trim()
  .split("\n");

arr1 = input[0].split(" ").map(Number);
arr2 = input[1].split(" ").map(Number);
solution(arr1, arr2);

function solution(arr1, arr2) {
  let total = arr1[0];
  let num = arr1[1];
  //console.log(total, num);

  let ans = [];
  for (let i = 0; i < total; i++) {
    if (arr2[i] < num) {
      ans.push(arr2[i]);
    }
  }
  console.log(ans.join(" "));
}
