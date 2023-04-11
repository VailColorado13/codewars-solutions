//Solution for 6kyu Find Matching Parenthesis
//Link to Kata: https://www.codewars.com/kata/59293c2cfafd38975600002d/javascript


String.prototype.findParenMatch = function(pos) {
  console.log(pos)
  let string = this
  
  if (string[pos] === ')') {
    let count = 0
    for (let i = pos -1; i >= 0; i--) {
      if (count === 0 && string[i] === '(') return i
      else {
        if (string[i] === ')') count++
        if (string[i] === '(') count--
      }
    }
  }
  
   if (string[pos] === '(') {
    let count = 0
    for (let i = pos + 1; i <= string.length; i++) {
      if (count === 0 && string[i] === ')') return i
      else {
        if (string[i] === '(') count++
        if (string[i] === ')') count--
      }
    }
  }
  return -1
}