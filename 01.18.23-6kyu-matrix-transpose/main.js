//Solution for 6kyu Matrix Transpose 
//Link to kata: https://www.codewars.com/kata/52fba2a9adcd10b34300094c/solutions/javascript

function transpose(matrix) {
  
  let reOrdered = []
  let newSize = matrix.length
  
  while (matrix.every(subArray => subArray.length)) {
    for (let i = 0; i < matrix.length; i ++) {
      reOrdered.push(matrix[i].shift())
    }
  }
  let result = []
  
  for (let i = 0; i < reOrdered.length; i+= newSize) { 
    result.push(reOrdered.slice(i, i + newSize))
  }
  
 return result
}