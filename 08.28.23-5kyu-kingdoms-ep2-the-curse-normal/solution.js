//Solution for 5 kyu Kingdoms Ep2: The curse (normal) 
//Link to Kata: https://www.codewars.com/kata/615b636c3f8bcf0038ae8e8b


function translate(speech, dict) {
    if (speech === '') return ''

  let matchesFound = 0
  speech = speech.split(' ')
  let result = []
  
  
  while (matchesFound < speech.length) {
    for (let i = 0; i < speech.length; i++) {
      if (speech[i] === 'skipskipskip') continue
      let commonLetters = {}
      const testWord = speech[i]
      const cursedWord = speech[i].split('').filter(letter => !['?', '!', ',', '.'].includes(letter)).join('')
      const specialChar = speech[i].match(/[?!,.]/g) || false

      

      for (let currentRef = 0; currentRef < dict.length; currentRef++) {
        for (let letter = 0; letter < dict[currentRef].length; letter++) {
          if (dict[currentRef].length !== cursedWord.length) continue
          else if ( dict[currentRef][letter] === cursedWord[letter] ) {
              if (!commonLetters[dict[currentRef]]) commonLetters[dict[currentRef]] = 1
              else commonLetters[dict[currentRef]]++
          }
        }
      } 
      //determine if out of the matches there is a word that is MOST similar 
      commonLetters = Object.entries(commonLetters)
      if (commonLetters.length === 1) {
        matchesFound++
        result.push([`${commonLetters[0][0]}${specialChar ? specialChar : ''}`, i])
        //remove that index from the dictionary
        dict.splice(dict.indexOf(commonLetters[0][0]), 1)
        speech.splice(i, 1,'skipskipskip')
      }
      else if (commonLetters.length > 1) {
     
        let maxMatch = Math.max(...commonLetters.map(pair => pair[1]))
        let filter = commonLetters.filter(pair => pair[1] === maxMatch)
   
        if (filter.length === 1) {
           matchesFound++
           result.push([`${filter[0][0]}${specialChar ? specialChar : ''}`, i])
           dict.splice(dict.indexOf(filter[0][0]), 1)
           speech.splice(i, 1,'skipskipskip')


        }
       }
      else if (commonLetters.length === 0) {
        //check for same length as a separate operation 
        let sameLength = dict.filter(word => word.length === cursedWord.length)
        if (sameLength.length === 1 && cursedWord.split('').every(letter => letter === '*') ) {
            matchesFound++
            result.push([`${sameLength[0]}${specialChar ? specialChar : ''}`, speech.indexOf(testWord)])
            dict.splice(dict.indexOf(sameLength[0]), 1)
            speech.splice(i, 1,'skipskipskip')

        }
        
      }
    }
  }
  return result.sort((a,b) => a[1] - b[1]).map(pair => pair[0]).join(' ')
}