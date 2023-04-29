//Solution for 7 kyu Find the index of the second occurrence of a letter in a string 
//Link to Kata: https://www.codewars.com/kata/63f96036b15a210058300ca9/javascript

function secondSymbol(s, symbol) {
  
    let foundOnce = false
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === symbol && foundOnce === true) {return i}
      else if (s[i] === symbol) {foundOnce = true}
    }
    
    return -1
  }