//Solution for 6kyu Assemble string
//Link to kata: https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6


function assembleString(array){
    if (!array.length) return ''
    let result = '#'.repeat(array[0].length).split('')
  
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (result[j] !== array[i][j] && array[i][j] !== '*') {
          result[j] = array[i][j]
          }
      }
    }
    
    return result.join('')
}