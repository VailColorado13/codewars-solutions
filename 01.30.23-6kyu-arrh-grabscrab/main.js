//Solution for 6kyu Arrh, grabscrab!
//Link to kata: https://www.codewars.com/kata/52b305bec65ea40fe90007a7


function grabscrab(anagram, dictionary) {
  let result = []
  
  anagram = anagram.split('').sort().join('')
  
  
  let sorties = dictionary.map((guess) => {
    guess = guess.split('').sort().join('')
    return guess
  })
  
  for (let i = 0; i < sorties.length; i++) {
    
    if (anagram === sorties[i]) result.push(dictionary[i])
    
  }                        
                               
  return result

}
