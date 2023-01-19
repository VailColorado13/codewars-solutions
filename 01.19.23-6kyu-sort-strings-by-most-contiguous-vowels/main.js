//Solution for Sort Strings by Most Contiguous Vowels
//Link to kata: https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/javascript


function sortStringsByVowels(strings){

    let vowels = /[AEIOUaeiou]/
    let counts = []
    
    for (let i = 0; i < strings.length; i++) {
        let maxStreak = 0
        let currentStreak = 0 
        for (let j = 0; j < strings[i].length; j++) {
          if (strings[i][j].match(vowels)) currentStreak++ 
          else currentStreak = 0 
          
          maxStreak = Math.max(currentStreak, maxStreak)
        }
      counts.push([strings[i] , maxStreak])    
    }
      
   counts = counts.sort((a,b) => b[1] - a[1])
   counts = counts.map(pair => pair[0])
   return counts  
    
  }