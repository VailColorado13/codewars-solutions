//Solution for 6 kyu Jump! 
//Link to Kata: https://www.codewars.com/kata/594fae1a0462da7beb000046


function canJump(array){
  let win = false

  const success = array.length 
  let seen = new Set()
  
  function checkIndex(index) {
    if (!seen.has(index)) {
        let numberOfJumps = array[index]
        let allPossibleMoves = []
        seen.add(index)

        for (let i = 1; i <= numberOfJumps; i++) {
          allPossibleMoves.push(index + i)
        }

        let successfulJumps = allPossibleMoves.filter(index => index >= success)
        if (successfulJumps.length > 0 && index !== array.length -1) win = true

        else allPossibleMoves.map((index) => checkIndex(index))
    }
  }
  checkIndex(0)
  return win
}