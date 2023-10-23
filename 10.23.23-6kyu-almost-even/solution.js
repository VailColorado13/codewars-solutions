//Solution for 6 kyu Almost Even 
//Link to Kata: https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b


var splitInteger = function(num, parts) {
  let answer= []
  const divided = Math.floor(num / parts)
  const remainder = num % parts
 
  for (let i = 0; i < remainder; i++) {
    answer.unshift(divided + 1)
  }
  
  for (let i = 0; i < parts - remainder; i++) {
    answer.unshift(divided)
  }
  
  return answer
  
}