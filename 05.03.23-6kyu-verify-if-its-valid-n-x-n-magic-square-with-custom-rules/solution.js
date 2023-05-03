//Solution for 6 kyu Verify if it's valid (n x n) Magic Square with custom rules 
//Link to Kata: https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9/javascript

function isValid(square, gap) {
  
  const check = square[0].reduce((pv,cv) => pv + cv)

  //are the horizontals equal to check? 
  for (let i = 0; i < square.length; i++) {
    if (square[i].reduce((pv,cv) => pv + cv) !== check) {return false}
  }
  //are the verticals equal to check? 
  for (let i = 0; i < square.length; i++) {
    const vertical = square.map(row => row[i])
    if (vertical.reduce((pv,cv) => pv + cv) !== check) {return false}
  }
  
  //are the diagonals equal to check?
  let diagonalOne = []
  let diagonalTwo = []
  
  for (let i = 0; i < square.length; i++) {
    diagonalOne.push(square[i][i])
    diagonalTwo.push(square[i][square.length - 1 - i])
  }
  
 if (diagonalOne.reduce((pv,cv) => pv + cv) !== check) {return false}
 if (diagonalTwo.reduce((pv,cv) => pv + cv) !== check) {return false}
  
  
  //is the gap consistant? 
 let flat = square.flat().sort((a,b) => a - b)
 
 for (let i = 0; i < flat.length -1; i++) {
   if (flat[i + 1] - flat[i] !== gap) return false
 }
  return true
}