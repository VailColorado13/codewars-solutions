//Solution for 6kyu only duplicates
//Link to kata: https://www.codewars.com/kata/5a1dc4baffe75f270200006b/javascript


function onlyDuplicates(str) {

    let counts = str.split('').reduce((obj, letter) => {
      
      if (!obj[letter]) obj[letter] = 1
      else obj[letter]++
      return obj
    },{})
    
    return str.split('').filter(letter => counts[letter] > 1).join('')

}

