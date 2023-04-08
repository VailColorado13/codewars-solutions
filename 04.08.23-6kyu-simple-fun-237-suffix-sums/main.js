//Solution for 6kyu Simple Fun #237 Suffix Sums 
//Link to kata: https://www.codewars.com/kata/590938089ff3d186cb00004c/javascript


function suffixSums(a) {
    let totalToSubtract = 0  
    let total = a.reduce((pv, cv) => pv + cv)
    let answer = []
    
    
    for(let i = 0; i < a.length; i++) {
      answer.push(total - totalToSubtract)
      totalToSubtract += a[i]
    
    }
    
    return answer
  }