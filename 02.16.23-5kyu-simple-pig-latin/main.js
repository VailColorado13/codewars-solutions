//solution for 5kyu Simple Pig Latin 
//Link to kata: https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript

function pigIt(str){
    let array = str.split(' ')
    const lastLetters = 'ay'
    
    const regex = /[\W_]+/
   
    let latin = array.map(word => {
      
      if (regex.test(word)) return word
      
      
      word = word.split('')
      let firstLetter = word.shift()
      word = word.join('')
      
      return `${word}${firstLetter}${lastLetters}`
      
    })
    
    return latin.join(' ')
   }