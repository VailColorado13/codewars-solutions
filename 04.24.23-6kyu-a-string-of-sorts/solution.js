//Solution for 6 kyu A String of Sorts 
//Link to Kata: https://www.codewars.com/kata/536c6b8749aa8b3c2600029a/javascript

function sortString(string,ordering) {
 
  let uniques = []
   
  ordering.split('').forEach(letter => {
    if (!uniques.includes(letter)) uniques.push(letter)
  })
  
  
  let firstLetters = string.split('').filter(letter => uniques.includes(letter))
  let secondLetters = string.split('').filter(letter => !uniques.includes(letter))
  

  
  let firstHalf = firstLetters.sort((a, b) =>  uniques.indexOf(a) - uniques.indexOf(b))
  
  return firstHalf.concat(secondLetters).join('')


}