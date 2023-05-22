//Solution for 7 kyu How Green Is My Valley? 
//Link to Kata: https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4

function makeValley(arr) {
    let even = arr.length % 2 === 0 
    let bottom
    let left = []
    let right = []
    let sorted = arr.sort((a,b) => a -b)
    let queue = true 
    
    if (even) {
      while (sorted.length) {
        let next = sorted.shift()
        if (queue === true) right.push(next)
        if (queue === false) left.unshift(next)
        queue = !queue 
      }
    }else{
      right.push(sorted.shift())
      
      while (sorted.length) {
        let next = sorted.shift()
        if (queue === true) right.push(next)
        if (queue === false) left.unshift(next)
        queue = !queue 
      }
      
    }
  return left.concat(right)
}