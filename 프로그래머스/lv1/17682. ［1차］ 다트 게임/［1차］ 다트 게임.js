function solution(dartResult) {
    let result = []
    dartResult = dartResult.split("")
    
    for(let i = 0; i < dartResult.length; i++) {
        // if(!isNaN(dartResult[i])) {
        // dartResult[i] = (dartResult[i-1] === "1" ? 10 : dartResult[i]);
        // }
        
        if(dartResult[i] + dartResult[i+1] === '10') {
                dartResult[i] = '10';
                dartResult.splice(i+1, 1)
        }
        
        if(dartResult[i] === "S"){
            result.push(Math.pow(dartResult[i-1],1))
        }
        if(dartResult[i] === "D"){
            result.push(Math.pow(dartResult[i-1],2))
        }
        if(dartResult[i] === "T"){
            result.push(Math.pow(dartResult[i-1],3))
        }
        
        if(dartResult[i] === "*"){
            result[result.length-2] = result[result.length-2]*2
            result[result.length-1] = result[result.length-1]*2
        }
            
        if(dartResult[i] === "#"){
            result[result.length-1] = result[result.length-1]*-1
        }
    }
    return result.reduce((acc, cur) => acc+cur)
}