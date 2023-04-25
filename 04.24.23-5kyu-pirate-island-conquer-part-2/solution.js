//Solution for 5 kyu Pirate Island Conquer Part 2 
//Link to Kata: https://www.codewars.com/kata/5962b98c2e8c8b02fa0000b4




function conquerIsland(map) {
  let pirateLocations = locatePirates(map)
  let arrayOfIslands = []
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  
 
  
  while (pirateLocations.length) {
  let queue = [pirateLocations.shift()]
  let distance = 0
  let visited = new Set()
  
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
  }
 
  
  let Unexplored = arrayOfIslands.filter(island => island.type === 'u')
  let Marines = arrayOfIslands.filter(island => island.type === 'm')
  let answer = []

  if (Unexplored.length === 0) {

    let min = Infinity 
    for (let island of Marines) {
         min = Math.min(min, island.distance)
    }
    let closestMarines = Marines.filter(island => island.distance === min)
    answer = closestMarines.map(island => island.position).sort((a,b) => a[0] - b[0])
  }

  else {
    let min = Infinity
    for (let island of Unexplored) {
      min = Math.min(min, island.distance)
    }
    let closestUnexplored = Unexplored.filter(island => island.distance === min)
    answer = closestUnexplored.map(island => island.position).sort((a,b) => a[0] - b[0])
  }
  
  return removeDuplicates(answer)
  
  
}



function locatePirates (map) {
  let pirateLocations = []
  
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'p') pirateLocations.push([i,j])
    }
  }
  return pirateLocations
}
  
function removeDuplicates (array) {
  let uniques = []
  for (let i = 0; i < array.length; i++) {
   const item = array[i] 
   let isDuplicate = false 
  
    for (let j = 0; j < uniques.length; j++) {
    if (JSON.stringify(uniques[j]) === JSON.stringify(item)) {
      isDuplicate = true
      break
      }
    }
   if (!isDuplicate) uniques.push(item)
  } 
  return uniques
  
}
  