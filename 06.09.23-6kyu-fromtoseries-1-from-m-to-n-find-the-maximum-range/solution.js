//Solution for 6 kyu From..To..Series #1: from m to n. Find the maximum range 
//Link to Kata: https://www.codewars.com/kata/58065440a4647e0ed3000230

function findMaxRange(ranges){
    let copy = ranges.slice()
     ranges = ranges.map(string => { 
       let arr = string.split(' ')
       let range =   Math.abs(Number(arr[3]) - Number(arr[1]))
       return range 
     })   
    
    let answer = []
    
    let max = Math.max(...ranges)
    
    for (let i = 0; i < ranges.length; i++) {
      if (ranges[i] === max) answer.push(copy[i])
    }
    return answer
  }