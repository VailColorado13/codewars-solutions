//Solution for 6 kyu Get the addresses of all Google Sheets cells in the range 
//Link to Kata: https://www.codewars.com/kata/62c376ce1019024820580309

function getCellAddresses(range) {
  range = range.split(':')
  const lettersRegex = /[A-Z]/g
  const numbersRegex = /[0-9]/g 
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let result = []
  
 
  
  if (range[0] === range[1]) return []
  
   
  
  range = range.map(cell => {
    const letters = cell.match(lettersRegex).join('')
    const numbers = Number(cell.match(numbersRegex).join(''))
    
    return [letters, numbers]
  })
    
 
  if (alphabet.indexOf(range[0][0]) > alphabet.indexOf(range[1][0])) return []
  if (range[0][1] > range[1][1]) return []
  
   
  for (let i = range[0][1]; i <= range[1][1]; i++) {
    let row = []
      for (let j = alphabet.indexOf(range[0][0]); j <= alphabet.indexOf(range[1][0]); j++) {
       row.push(`${alphabet[j]}${i}`)
      }
    result.push(row)
  }
 
 return result.flat()
  
  
}