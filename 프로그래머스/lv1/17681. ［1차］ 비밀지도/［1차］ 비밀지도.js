function solution(n, arr1, arr2) {
    // n = 변의 길이 = 이진수의 길이 = arr1, arr2의 길이
    // arr1 = 지도1 = 각 요소를 이진수로 바꾸면 ""과 "#"를 알수 있음
    // arr2 = 지도2 = 위와 동일
    // 이진수화 된 arr1과 arr2를 합친다
    // 0은 "", 1 또는 2는 "#"로 변환 후 리턴
    let map1 = []
    for(let i = 0; i < n; i++) {
        map1.push(arr1[i].toString(2))
        map1 = map1.map(Number)
    }
    console.log(map1)
    let map2 = []
    for(let i = 0; i < n; i++) {
        map2.push(arr2[i].toString(2))
        map2 = map2.map(Number)
    }
    console.log(map2)
    
    let sumArr = []
    for(let i = 0; i < map1.length; i++) {
        sumArr.push(map1[i] + map2[i])
        sumArr = sumArr.map(String)
        for(let j = 0; j < sumArr.length; j++) {
            if(sumArr[j].length < n) {
                sumArr[j] = '0' + sumArr[j]
            }
        }
    }
    console.log(sumArr)
    let finalArr = []
    for(let i = 0; i < sumArr.length; i++) {
        let finalNum = sumArr[i].replace(/2/gi,"1")
        finalArr.push(finalNum)
    }
    console.log(finalArr)
    
    let arr = []
    for(let i = 0; i < finalArr.length; i++) {
       let result = finalArr[i].replace(/1/g, "#")
       arr.push(result)
    }
    console.log(arr)
    
    let finalResult = []
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i].replace(/0/g, " ")
        finalResult.push(num)
    }
    return finalResult
}