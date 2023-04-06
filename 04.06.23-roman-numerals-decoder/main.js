//Solution for 6kyu Roman Numerals Decoder
//Link to kata: https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript

function solution (roman) {
    const romanToDecimal = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    
    let separatedNumbers = ''
      
    
    for (let i = 0; i < roman.length; i++) {
      if (romanToDecimal[roman[i]] >= romanToDecimal[roman[i+1]]) {
        separatedNumbers += `${roman[i]},`
      }
      else separatedNumbers += `${roman[i]}`
    }
     
  
    separatedNumbers = separatedNumbers.split(',')
    
    let final = []
    console.log(separatedNumbers)
    
    separatedNumbers.forEach(numeral => {
      
    if (numeral.length === 1) {final.push(romanToDecimal[numeral])}
   
      
      
    else {
        let starting = romanToDecimal[numeral[numeral.length -1]]
        
        for (let i = numeral.length - 2; i >= 0; i--) {
          starting -= romanToDecimal[numeral[i]]
        }       
        final.push(starting)
      }
    })
    
    return final.reduce((pv, cv) => pv + cv)
    
    
    
  }