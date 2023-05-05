//Solution for 6 kyu Island Count 
//Link to Kata: https://www.codewars.com/kata/5611e038a1b7990def000076

function countIslands(mapStr) {
  let map = mapStr.split('\n').map(row => row.split(''))
  const length = map.length
  let visited = new Set()
  
  let count = 0
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]  
  for (let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      const currentPosition = map[i][j]
      const coords = [[i],[j]].join('')
      if (currentPosition !== '0' || visited.has(coords)) continue
      
      else {
        count++
        let queue = [[i,j]]
        let partOfTheIsland = new Set()
        while (queue.length > 0) {
          let size = queue.length 
          for (let i = 0; i < size; i++) {
            const pos = queue.shift()
            visited.add(pos.join(''))
            for (const dir of directions) {
              const newPos = [pos[0] + dir[0], pos[1] + dir[1]]
              const key = newPos.join(',')
              visited.add(key)
                  
              if (
                newPos[0] >= 0 &&
                newPos[0] < length &&
                newPos[1] >= 0 &&
                newPos[1] < length &&
                map[newPos[0]][newPos[1]] === '0' &&
                !partOfTheIsland.has(key)
              ) {
                queue.push(newPos)
                partOfTheIsland.add(key)
              }
            }  
          } 
        }
      }
    }
  }
  
  return count
}
