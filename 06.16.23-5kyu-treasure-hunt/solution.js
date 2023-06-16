//Solution for 5 kyu Treasure hunt 
//Link to Kata: https://www.codewars.com/kata/556032250449c422d200004a/javascript

function treasure(maze, x, y) {

  
    const directions = [[0,1] , [1,0], [0,-1], [-1,0]]
    let explored = new Set()
    let queue = [[y-1, x -1]]
    let outOfBounds = maze.length
    
    while (queue.length) {
      let loopLength = queue.length
      for (let i = 0; i < loopLength; i++) {
        const currentPosition = queue.shift()
        if (maze[currentPosition[0]][currentPosition[1]] !== 'X' && maze[currentPosition[0]][currentPosition[1]] !== ' ') {
          return `The treasure is ${maze[currentPosition[0]][currentPosition[1]]} :)`
        }
        for (const dir of directions) {
          const newPos = [currentPosition[0] + dir[0], currentPosition[1] + dir[1]]
          const key = newPos.join(',')
          
          if ( 
            maze[newPos[0]][newPos[1]] !== 'X' && 
            !explored.has(key)
          ) {
            explored.add(key)
            queue.push(newPos)
          }
        }
      }
    }
    
    return 'No treasure found :('
  
  }