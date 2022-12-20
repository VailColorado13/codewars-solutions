//Solution for 5kyu First non-reapeating character 
//Link to Kata: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e



function firstNonRepeatingLetter(s) {
  
    if (s.length === 0) return s
    
    let counts = s.toLowerCase().split('').reduce((obj, char) => {
      
      if (!obj[char]) obj[char] = 1  
      else obj[char]++
      return obj
    }, {})
    
    
    let occurOnce = Object.entries(counts).filter(entry => entry[1] === 1).map(entry => entry[0])
    
    if (occurOnce.length === 0) return ''
    
    for (let i = 0; i <= s.length; i++) {
      
      if (occurOnce.includes(s[i].toLowerCase())  || occurOnce.includes(s[i].toUpperCase())) return s[i]
      
    }  
    
}