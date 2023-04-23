//Solution for 4 kyu Path Finder #1: can you reach the exit? 
//Link to Kata: https://www.codewars.com/kata/5765870e190b1472ec0022a2

function pathFinder(mazeString) {
    const maze = mazeString.trim().split('\n')
    const N = maze.length
  
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let queue = []
    let visited = new Set()
    queue.push([0,0])
    
    while (queue.length) {
      let size = queue.length
      for (let i = 0; i < size; i++) {
        const pos = queue.shift()
        if (pos[0] === N - 1  && pos[1] === N -1) {return true}
        for (const dir of directions) {
          const newPos = [pos[0] + dir[0], pos[1] + dir[1]]
          const key = newPos.join(',')
          if (
            newPos[0] >= 0 && newPos[0] < N &&
            newPos[1] >= 0 && newPos[1] < N && 
            maze[newPos[0]][newPos[1]] !== 'W' &&
            !visited.has(key)
          ) {
            visited.add(key)
            queue.push(newPos)
          }
        } 
      }
    }
    return false 
  }