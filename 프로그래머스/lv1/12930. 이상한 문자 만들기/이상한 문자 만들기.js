function solution(s) {
    // 각 문자를 공백 기준으로 나눔
    // 짝수번째 인덱스는 대문자. 홀수번째 인덱스는 소문자로 변환
    // 다시 문자를 합치고 리턴
    
    let ans = "";
    let temp = s.split(" ");
    for(let x of temp){
        let arr =  x.split("");
        let maparr = arr.map((c, idx)=> idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase());
        ans += maparr.join("") + " ";
    }
    return ans.slice(0,-1);
}