//Solution for 6kyu Extract last names of people named Michael

//link to kata: https://www.codewars.com/kata/580741302e14acaef900015a/solutions/javascript

function getMichaelLastName(inputText) {
  
    let regex1 = /Michael/
    let regex2 = /[A-Z]/i
    
    
    let lastNames = inputText.split(' ').filter((word, index,array) => {
      
    return  index !== 0 && array[index-1].match(regex1) && word[0] === word[0].toUpperCase()
        
    })
    
    
    let clean = lastNames.map((name) => {
      
      name = name.split('')
      
      return name.filter((letter) => {  
       return letter.match(regex2) 
      })
      
      
    })
    
   clean = clean.map((array) => array.join(''))
    return clean
  }