//Solution for 5 kyu Pirate Island Conquer Part 1 
//Link to Kata: https://www.codewars.com/kata/59604925a68b04598e00001e/javascript


function conquerIsland(map) {
  let arrayOfIslands = []
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  
  let queue = [[0,0]]
  let visited = new Set()
  let distance = 0
  
  while (queue.length > 0) {
  
    let size = queue.length 
    for (let i = 0; i < size; i++) {
      const pos = queue.shift()
      for (const dir of directions) {
        const newPos = [pos[0] + dir[0], pos[1] + dir[1]]
        const key = newPos.join(',')

        if (
         newPos[0] >= 0 &&
         newPos[0] < 8 &&
         newPos[1] >= 0 &&
         newPos[1] < 8 &&
          !visited.has(key)  
       ) {
          queue.push(newPos)
          visited.add(key)
          if (map[newPos[0]][newPos[1]] !== '~' && map[newPos[0]][newPos[1]] !== 'p') {
              let newIsland = {}
              newIsland.type = map[newPos[0]][newPos[1]]
              newIsland.position = newPos
              newIsland.distance = distance
              arrayOfIslands.push(newIsland)
          }
        }
      }
    } 
    distance++ 
  }
  
  let Unexplored = arrayOfIslands.filter(island => island.type === 'u')
  let Marines = arrayOfIslands.filter(island => island.type === 'm')


  if (Unexplored.length === 0) {

    let min = Infinity 
    for (let island of Marines) {
         min = Math.min(min, island.distance)
    }
    let closestMarines = Marines.filter(island => island.distance === min)
    return closestMarines.map(island => island.position).sort((a,b) => a[0] - b[0])
  }

  else {
    let min = Infinity
    for (let island of Unexplored) {
      min = Math.min(min, island.distance)
    }
    let closestUnexplored = Unexplored.filter(island => island.distance === min)
    return closestUnexplored.map(island => island.position).sort((a,b) => a[0] - b[0])
  }
  
} 