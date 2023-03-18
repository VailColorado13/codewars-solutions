//solution for 7kyu all inclusive
//link to kata: https://www.codewars.com/kata/5700c9acc1555755be00027e

function containAllRots(string, rotations) {
    let counter = 0
    let letters = string.split("")
    
    while (counter < letters.length) {
      
      let last = letters.pop()
      
      letters.unshift(last)
      if (!rotations.includes(letters.join(''))) return false
      
      counter++ 
    }
  
  return true
}