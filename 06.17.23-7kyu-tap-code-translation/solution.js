//Solution for 7 kyu Tap Code Translation 
//Link to Kata: https://www.codewars.com/kata/605f5d33f38ca800322cb18f/javascript

function tapCodeTranslation(text) {

text = text.replaceAll('k', 'c')
    
  const matrix = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ]
  
  let result = ''

    for (let i = 0; i < text.length; i++) {
      const letter = text[i].toUpperCase()
      let row 
      let column 
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j].indexOf(letter) !== -1) {
          row = j
          column = matrix[j].indexOf(letter)
          break
        }
      }
      result += '.'.repeat(row + 1)
      result += ' '
      result += '.'.repeat(column + 1)
      result += ' '
    }
    
    return result.trim()
  }