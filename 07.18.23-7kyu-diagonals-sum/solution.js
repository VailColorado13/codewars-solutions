//Solution for 7 kyu Diagonals sum 
//Link to Kata: https://www.codewars.com/kata/5592fc599a7f40adac0000a8

function sum(matrix) {
    let downFromLeft = 0 
    let upFromLeft = 0
    
    for (let i = 0; i < matrix.length; i++) {
      downFromLeft += matrix[i][i]
      upFromLeft +=  matrix[matrix.length -1- i][i]
    }
    
    return downFromLeft + upFromLeft
  }