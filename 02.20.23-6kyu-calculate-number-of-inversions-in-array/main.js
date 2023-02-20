//Solution for 6kyu Calculate number of inversions in array
//Link to kata: https://www.codewars.com/kata/537529f42993de0e0b00181f/javascript

function countInversions( array ){
  let count = 0 
  console.log(array)
  
  for (let i = 0; i < array.length -1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[i]) count++
    }
    
  }
  
  return count
}