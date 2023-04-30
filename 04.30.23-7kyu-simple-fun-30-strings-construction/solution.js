//Solution for 7 kyu Simple Fun #30: Strings Construction 
//Link to Kata: https://www.codewars.com/kata/58870402c81516bbdb000088/javascript


function stringsConstruction(A, B) {
      
    let availLetters = B.split('').reduce((obj, letter) => {
      if (!obj[letter]) {obj[letter] = 1}
      else obj[letter]++
      return obj
    },{})
    
    let spelled = true
    let count = 0
  
    while (spelled === true) {
      const array = A.split('')
      for (let i = 0; i < array.length; i++) {
        if (availLetters[array[i]] <= 0 || !availLetters[array[i]]) spelled = false 
        else availLetters[array[i]]--
      }
      if (spelled === true) count++ 
    }
    return count 
    
  }