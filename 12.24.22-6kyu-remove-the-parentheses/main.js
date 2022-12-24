//Solution for 6kyu remove the parentheses
//link to kata: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8


function removeParentheses(s){
  
 let response = ''
 
 let tally = 0 
 
 for (let i = 0; i < s.length; i++) {
   
   s[i] === '(' ? tally++ : s[i] === ')' ? tally-- : tally = tally
   if (tally === 0 && s[i] !== '(' && s[i] !== ')') response += s[i]
   
 }
  return response
  
}