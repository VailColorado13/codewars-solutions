//Solution for 6kyu if you can read this...
//Link to kata: https://www.codewars.com/kata/586538146b56991861000293




function to_nato(words) {
    let letters = words.toLowerCase().split('').filter(letter => letter !== ' ')
    
    let response = []
    
    for(let i = 0; i <= letters.length; i++) {
      
      if (letters[i] in NATO) {response.push(NATO[letters[i]])}
      else response.push(letters[i])
      
    }
    
  
  return response.join(' ').trim()
  }