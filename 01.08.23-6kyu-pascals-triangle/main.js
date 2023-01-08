//Solution for 6kyu Pascal's Triangle
//Link to kata: https://www.codewars.com/kata/5226eb40316b56c8d500030f/javascript


function pascalsTriangle(n) {
    let array = []
    array[0] = [1]
  
    for (let i = 1; i < n; i++) {
      array[i] = []
      for(let j = 0; j <= i; j++) {        
        if (j === 0 || j === i) array[i][j] = 1 
        else array[i][j] = array[i-1][j] + array[i-1][j-1]
      }
    }
  
    let result = array.flat() 
    return result
  }