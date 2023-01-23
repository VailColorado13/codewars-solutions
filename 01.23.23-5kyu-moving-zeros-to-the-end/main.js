//Solution for 5kyu Moving Zeros to the End 
//Link to kata: https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript


function moveZeros(arr) {

  
  let check = arr.map(element => typeof element === 'number' && element === 0)
  
  let result = []
  let zeros = []
  
  for (let i = 0; i < check.length; i++) {
    
    if (!check[i]) result.push(arr[i])
    else zeros.push(0)
     
  }

  return result.concat(zeros)
}