//Solution for 6kyu Simple String Indices
//Link to kata: https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078/javascript

function solve(str,idx){

  if (str[idx] !== '(' )   return -1
  
  
  let count = 1 
  
  for (let i = idx +1; i <= str.length; i++) {
    
    if (str[i] === '(' ) count++
    if (str[i] === ')' ) count--
    
    if (count === 0) return i
    
  }
  
}