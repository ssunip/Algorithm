function solution(angle) {
    let angleLevel = 1
    
    if(0 < angle && angle < 90) angleLevel
    else if(angle === 90) angleLevel = 2
    else if(90 < angle && angle < 180) angleLevel = 3
    else angleLevel = 4
    
    return angleLevel;
}