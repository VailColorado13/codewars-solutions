//Solution for 6 kyu Loneliest character 
//Link to Kata: https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8

function loneliest(str) {
  str = str.trim()
  let lonliest = []
  let prevMax = -Infinity
   
  for (let letter = 0; letter < str.length; letter++) {
    let spaces = 0
    if (str[letter] === ' ') continue
    else {
      let charToLeft = letter - 1
      let foundToLeft = false
      while (charToLeft >= 0 && foundToLeft === false) {
        if (str[charToLeft] === ' ') {
          spaces++
        }
        else {
          foundToLeft = true
        }
        charToLeft--
      } 
      
      let charToRight = letter + 1
      let foundToRight = false 
      
      while (charToRight < str.length && foundToRight === false) {
         if (str[charToRight] === ' ') {
          spaces++
        }
        else {
          foundToRight = true
        }
        charToRight++
      }
    }
    
    if (spaces > prevMax) {
      prevMax = spaces
      lonliest = [str[letter]] 
    }
    else if (spaces === prevMax) {
      lonliest.push(str[letter])
    }
  } 
  
  return lonliest
  
}