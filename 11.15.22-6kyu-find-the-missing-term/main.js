//Solution for 6kyu Find the missing term in an Arithmetic Progression
//link to Kata: https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript


var findMissing = function (list) {  
  
    let max = Math.max(...list)
    let min = Math.min(...list)
      
    let increment = 1 /(list.length / (max - min))
    console.log(increment)
  
    let expected = []
    
    for (let i = min; i <= max; i+= increment) {
      expected.push(i)
    }
   
    
    let expectedSum = expected.reduce((pv,cv) => pv + cv,0)
    let actualSum = list.reduce((pv,cv) => pv + cv,0)
    
    
    return expectedSum - actualSum
    
    
  }