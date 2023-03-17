//Solution for 7kyu Shifter Words 
//Link to Kata: https://www.codewars.com/kata/603b2bb1c7646d000f900083/discuss/javascript

function shifter(s){
  if (s === '') return 0
  const shifterLetters = ["H", "I", "N", "O", "S", "X", "Z", "M" , "W"]
  let shifterWords = []
  
  let letters = s.split(' ').map(word => word.split(''))

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].every(letter => shifterLetters.includes(letter))) {
      if (!shifterWords.includes(letters[i].join('')))  shifterWords.push(letters[i].join(''))
    }
  }
 return shifterWords.length
}