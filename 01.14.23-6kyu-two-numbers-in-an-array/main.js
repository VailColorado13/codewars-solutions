//Solution for 6kyu Two numbers in an array adding up to a given number
//Link to kata: https://www.codewars.com/kata/58dace86b809ca6c62000ccf/train/javascript

function hasPair(A, sum){
    let table = {}
    
    for (let i = 0; i < A.length; i++) {
      let current = A[i]
      if (table[current]) return true
      
      let pair = sum - current
      table[pair] = true
     
    }
    
     return false
    
}

