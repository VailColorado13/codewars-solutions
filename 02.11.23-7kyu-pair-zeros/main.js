//Solution for 7kyu Pair Zeros
//Link tot kata - https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/


function pairZeros(arr) {

  let pair = false 
  let res =[]
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] !== 0) res.push(arr[i])
    
    if (arr[i] === 0) {
      if (pair === false) {
        pair = true
        res.push(arr[i])
        continue
      }
      if (pair === true) {
        pair = false
      } 
    }  
  }
  
  return res
  
}