//solution for 7kyu valid parenthesis 
//link to kata: https://www.codewars.com/kata/6411b91a5e71b915d237332d/javascript

function validParentheses(parenStr) {
  let counter = 0 
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(')  counter++
    if (parenStr[i] === ')')  counter--
    if (counter < 0) return false 
  }
  
  return counter === 0
  
}