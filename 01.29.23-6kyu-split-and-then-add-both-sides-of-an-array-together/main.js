//Solution for 6kyu Split and then add both sides of an array together
//Link to kata: https://www.codewars.com/kata/5946a0a64a2c5b596500019a/javascript

function splitAndAdd(arr, n) {
    if (n === 0 || arr.length === 1) return arr   
    let middle = Math.floor(arr.length / 2)
    let leftSide = arr.slice(0, middle)
    let rightSide = arr.slice(middle)
    
    if (leftSide.length < rightSide.length) leftSide.unshift(0)
    
    let result = []
    
    for (let i = 0; i < leftSide.length; i++) {
      
      result.push(leftSide[i] + rightSide[i])
      
    }
    
    return splitAndAdd(result, n-1)
  }