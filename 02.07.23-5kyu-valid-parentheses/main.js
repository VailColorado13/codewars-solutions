// Solution for 5kyu Valid Parentheses
// Link to kata: https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript



function validParentheses(parens) {
    if (parens.length === 0) return true
    if (parens.length === 1) return false 
    
   let counter = 0
   
    
    for (let i = 0; i <= parens.length; i++) {
      
      if (   parens[i] === '('  ) counter++ 
      if (   parens[i] === ')'  ) counter--
      
      if ( counter < 0 ) return false
    }
    
    if (counter > 0) {return false}
    return true;
  }