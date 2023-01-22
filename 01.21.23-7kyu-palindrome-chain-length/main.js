//Solution for 6kyu Palindrome Chain Length
//Link to Kata: https://www.codewars.com/kata/525f039017c7cd0e1a000a26

var palindromeChainLength = function(n) {
  
    if (n === Number(String(n).split('').reverse().join(''))) return 0
    
    let checker = false
    let steps = 0
    
    
    while (!checker) {
      steps++
      const reverse = Number(String(n).split('').reverse().join(''))
      
      const sum = reverse + n 
      
      console.log(sum)
      const reverseSum = Number(String(sum).split('').reverse().join(''))
      
      if (sum === reverseSum) checker = true
      else n = sum
      
    }
    
    return steps
      
  }