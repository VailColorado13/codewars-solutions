//Solution for 7 kyu Dominant array elements 
//Link to Kata: https://www.codewars.com/kata/5a04133e32b8b998dc000089/javascript


function solve(arr){

  let maxSoFar = 0
  let result = []
  for (let i = arr.length -1; i >= 0; i--) {
    if (arr[i] > maxSoFar) {
      maxSoFar = arr[i]
      result.unshift(arr[i])
    }
  }
  
  return result
  
}