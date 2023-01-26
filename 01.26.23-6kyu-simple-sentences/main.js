//Solution for 6kyu Simple Sentences
//Link to kata: https://www.codewars.com/kata/5297bf69649be865e6000922

function makeSentence(parts) {
    parts = parts.filter(part => part !== '.')
    
    for (let i = 0; i <= parts.length; i++) {
      
      if (parts[i] === ',') {
        parts[i-1] =`${parts[i-1]},`
      }
    }
    
    parts = parts.filter(part => part !== ',')
    
    parts = parts.join(' ')
    
    parts += '.'
    
    return parts
    
  }
  