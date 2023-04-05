//Solution for 7kyu How many consecutive numbers are needed?
//Link to kata: https://www.codewars.com/kata/559cc2d2b802a5c94700000c

function consecutive(arr) {
    arr = arr.sort((a,b) => a - b)
    let count = 0 
    for (let i = 0; i < arr.length -1; i++) {
      let difference = arr[i+1] - arr[i]
      count += difference -1  
    }   
    return count
  }