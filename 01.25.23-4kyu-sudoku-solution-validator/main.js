//Solution to 4kyu Sudoku Solution Validator
//Link to kata: https://www.codewars.com/kata/529bf0e9bdf7657179000008/javascript

function validSolution(board){
  
    function checkSquares (board) {
      let top = board.slice(0, 3)
      let middle = board.slice(3,6)
      let bottom = board.slice(6,9)
      
     let topLeft = top.map(array => array.slice(0,3)).flat().sort((a,b) => a - b).join('')
     let topMiddle = top.map(array => array.slice(3,6)).flat().sort((a,b) => a - b).join('')
     let topRight = top.map(array => array.slice(6,9)).flat().sort((a,b) => a - b).join('')
     
     let middleLeft = middle.map(array => array.slice(0,3)).flat().sort((a,b) => a - b).join('')
     let middleMiddle = middle.map(array => array.slice(3,6)).flat().sort((a,b) => a - b).join('')
     let middleRight = middle.map(array => array.slice(6,9)).flat().sort((a,b) => a - b).join('')
    
     let bottomLeft = middle.map(array => array.slice(0,3)).flat().sort((a,b) => a - b).join('')
     let bottomMiddle = middle.map(array => array.slice(3,6)).flat().sort((a,b) => a - b).join('')
     let bottomRight = middle.map(array => array.slice(6,9)).flat().sort((a,b) => a - b).join('')
    
     const array = [topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight]
   
     return array.every(string => string === '123456789')
     
      
    }
    
    
    function checkColumns (board) {
      for (let i = 0; i <= 8; i++) {
        let array = []
        for (let j = 0; j <= 8; j++) {
          array.push(board[i][j])
        }
       array = array.sort((a,b) => a - b).join('')
       if (array !== '123456789') return false  
      } 
      return true 
    }
    
    
    function checkRows (board) {
      board.forEach(row => {
        
        let string = row.sort((a,b) => a - b).join('')
           if (string !== '123456789') return false  
  
      })
      return true
    }
    
  
  if (checkSquares(board) === true &&  checkColumns(board) === true && checkRows(board) === true) return true 
    else return false 
    
    
  }