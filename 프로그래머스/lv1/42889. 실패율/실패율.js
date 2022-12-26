function solution(N, stages) {
    let failRate = 0
    let stage = 1
    let sortStages = stages.sort((a, b) => a-b)
    let result = {}
    let answer = []
    for(let i = 1; i <= N; i++) {
        if(stage === N+1) break
        if(sortStages.length === 0) {
            failRate = 0
        }
        else {
            let arr = sortStages.filter(el => el === stage)
            // console.log(stage, arr.length)
            failRate = arr.length/sortStages.length
        }
        sortStages = sortStages.filter(el => el !== stage)
        stage++
        i = 0
        
        // 객체로 sorting
        result[stage-1]=failRate
        answer = Object.entries(result).sort((a,b) => {
            if(a[1] === b[1]) {
                return a[0] - b[0]
            } else {
                return b[1] - a[1]
            }
        })
    }
    // console.log(result)
    // console.log(answer)
    let sorted = []
    for(let x of answer) {
        sorted.push(+x[0])
    }
    return sorted
}