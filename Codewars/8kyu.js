

const summation = (num) => {
    const array = [0]
    const initialValue = array[0]
    
    const n = num

    for (let i = 1; i <= n; i++){
        const newValue = initialValue + i
        array.push(newValue)
    }

    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const cockroachSpeed = (speed) =>{
     return Math.floor(speed.toFixed(2) * 27.7778)
}

const arr = [50, "30", 20, "10"]

const betterThanAverage = (classPoints, yourPoints) => {
    classPoints.push(yourPoints)
    const sum = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    average = sum / classPoints.length

    if (yourPoints > average){
        return true
    }
    else{
        return false
    }
}

function sumMix(x){
    const isIntegerArray = x.map((item) => {
       if(Number.isInteger(item)){
        return item
       }
       else{
        return parseInt(item)
       }
    });

    return isIntegerArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function solution(str, ending){
    if(str.endsWith(ending)){
        return true
    }
    else{
        return false
    }
  }

solution("abc", "c")