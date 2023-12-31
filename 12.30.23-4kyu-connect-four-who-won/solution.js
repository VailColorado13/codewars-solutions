//Solution for 4 kyu Connect Four: Who Won? 
//Link to Kata: https://www.codewars.com/kata/529962509ce9545c76000afa/javascript


function connectFour(board) {
    let full = true
    for (let column = 0; column < board[0].length; column++) {
      for (let row = 0; row < board.length; row++) {
        if (board[row][column] === '-') {
          full = false
          continue
          }
        else {
          let right = board[row][column]
          let r = 1
          while (r <= 3) {
            right += board[row][column + r]
            r++
          }
          let down = board[row][column]
          let d = 1
          while (d <= 3 && row - d >= 0){
            down += board[row -d][column]
            d++
          }
          let diagRightDown = board[row][column] 
          let dr = 1
          while (dr <= 3 && row + dr < board.length && column + dr <= board[0].length) {
            diagRightDown += board[row + dr][column + dr]
            dr++
          }
          let diagRightUp = board[row][column]
          let dru = 1
          while (dru <= 3 && row - dru >= 0 && column + dru <= board[0].length) {
            diagRightDown += board[row - dru][column + dru]
            dru++
          }
          
          let diagLeftUp = board[row][column]
          let dl = 1
          while (dl <= 3 && row - dl >= 0 && column - dr >= 0) {
            diagLeftUp += board[row - dl][column - dl]
            dl++
          }
          
          let diagLeftDown = board[row][column]
          let dld = 1
          
          while (dld <= 3 && row + dld < board.length && column - dld >= 0) {
            diagLeftDown += board[row + dld][column - dld]
            dld++
          }
          
          let rWins = [right, down, diagRightDown, diagRightUp, diagLeftUp, diagLeftDown].filter(str => str === 'RRRR')
          let yWins = [right, down, diagRightDown, diagRightUp, diagLeftUp, diagLeftDown].filter(str => str === 'YYYY')
          
          if (rWins.length) return 'R'
          if (yWins.length) return 'Y'
          
        }
      }   
    }
    if (full) return 'draw'
    else return 'in progress'
  }