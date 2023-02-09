//Solution for 6kyu How Many Feelings 
//Link to kata: https://www.codewars.com/kata/5a33ec23ee1aaebecf000130

function countFeelings(string, array) {

    let feelsCount = 0
    
    let lettersAvail = string.split('').reduce((obj, letter) => {
      if (!obj[letter]) obj[letter] = 1
      else obj[letter++]
      return obj       
    }, {})
    
    
    for (let i = 0; i < array.length; i++) {
      const count = []
      for (let j = 0; j < array[i].length; j++) {
        if (lettersAvail[array[i][j]] === undefined) count.push(0)
        else count.push(lettersAvail[array[i][j]])
      }
      feelsCount += Math.min(...count)
    
     
    }
    
    return `${feelsCount} ${feelsCount === 1 ? 'feeling' : 'feelings'}.`