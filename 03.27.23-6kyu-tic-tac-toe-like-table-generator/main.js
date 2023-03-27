//solution for 6kyu tic tac toe generator 
//link to kata: https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/javascript




function displayBoard(board, width){

  let rows = []
  
  for (let i = 0; i < board.length; i+= width) {
    let sub = board.slice(i , i + width)
    rows.push(sub.map(elem => ` ${elem} `).join('|'))
  }


 let result = []
  
  for (let i = 0; i < rows.length; i++) {
    result.push(rows[i])
    
    if (i !== rows.length-1) {
      result.push('-'.repeat(rows[0].length))
    } 
  }
  
 return result.join('\n')

}