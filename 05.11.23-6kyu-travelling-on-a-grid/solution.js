//Solution for 6 kyu Travelling on a Grid 
//Link to Kata: https://www.codewars.com/kata/5845b080a87f768aaa00027c

function travelChessboard(s){
  let start = [Number(s[1]) , Number(s[3])] 
  let end = [Number(s[6]) , Number(s[8])]
  
  let x = end[0] - start[0] + 1
  let y = end[1] - start[1] + 1
  
  const pathFinder = (x, y, memo = {}) => {
    const key = x + ',' + y
    if (key in memo) return memo[key]
    if (x === 1 && y === 1) return 1
    if (x === 0 || y === 0) return 0
    
    memo[key] = pathFinder(x - 1, y, memo) + pathFinder(x, y -1, memo)
    return memo[key]
    
  }
  
  return pathFinder(x,y)

  
  
}