//Solution for 6kyu backspaces in a string 
//link to kata: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/solutions/javascript


function cleanString(s) {
    
    let indecesToRemove = []
    for (let i = 0; i <= s.length; i++) {
      if (s[i] === '#' && s[i - 1] !== '#') {
        indecesToRemove.push(i-1)
        indecesToRemove.push(i)
      }
    }
    
    let newStr = ''
    
    for (let i = 0; i < s.length; i++) {
      if (!indecesToRemove.includes(i)) newStr += s[i]
      } 
    
    let backspaces = /[#]/g
    let otherChars = /[^#]/g 
    
    
    if (otherChars.test(newStr) && backspaces.test(newStr)) return cleanString(newStr)
  
    else return newStr.split('').filter(char => char != '#').join('')
    
  }