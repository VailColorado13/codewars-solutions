//Solution for 4 kyu Range Extraction 
//Link to Kata: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
  
  let solution = ''
  let intervals = []

  while (list.length) {
    let nextInterval = [list.shift()]
    
    for (let i = 0; i < list.length; i++) {
      if ((list[i]) === nextInterval[nextInterval.length -1] +1) {
        nextInterval.push(list[i])
      } else break 
    }
    list.splice(0, nextInterval.length -1)
    if (nextInterval.length === 2)  {
      intervals.push([nextInterval[0]])
      intervals.push([nextInterval[1]])
    }
    else intervals.push(nextInterval)
  }

  intervals.forEach(interval => {
    if (interval.length === 1) {
      solution += String(interval[0]) + ','
    }
    else {
      solution += String(interval[0]) + '-' + String(interval[interval.length -1]) + ','
    }
  })
  
  return solution.substring(0, solution.length-1) 

}


