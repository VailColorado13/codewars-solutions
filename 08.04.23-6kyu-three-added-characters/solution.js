//Solution for 6 kyu Three added Characters 
//Link to Kata: https://www.codewars.com/kata/5971b219d5db74843a000052/javascript

function addedChar(s1, s2){
    let countsOne = s1.split('')
      .reduce((obj,letter) => {
        if (!obj[letter]) obj[letter] = 1
        else obj[letter]++
        return obj
      }, {})
  
    let countsTwo = s2.split('')
      .reduce((obj,letter) => {
        if (!obj[letter]) obj[letter] = 1
        else obj[letter]++
        return obj
      }, {})
    
    for (const letter in countsTwo) {
      if (!countsOne[letter]) return letter
      if (countsOne[letter] < countsTwo[letter]) return letter
    }                                  
  }