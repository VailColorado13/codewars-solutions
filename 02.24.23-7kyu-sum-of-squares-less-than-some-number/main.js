//Solution for Sum of squares less than some number
//Link to kata: https://www.codewars.com/kata/57b71a89b69bfc92c7000170/javascript

function getNumberOfSquares(n) {
  if (n === 1) return 0
  
  let sum = 0
  let tracker = 1
  
  while (sum < n) {
    sum+= tracker**2
    tracker++
  }
  
  return tracker -2

}