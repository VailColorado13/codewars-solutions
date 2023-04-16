//Solution for 6kyu Mad Max: Recursion Road 
//Link to Kata: https://www.codewars.com/kata/57bd0abcb9799763f1001bdc


function max(array) {

    if (array.length === 0) return -Infinity
    if (array.length === 1) return array[0]
    
    const first = array.shift()
    const last = array.pop()
    
    
    if (first > last) array.push(first)
    if (last > first) array.push(last)
  
    return max(array)
    
  }