//Solution for 5 kyu I am all alone (poor me) 
//Link to Kata: https://www.codewars.com/kata/5c230f017f74a2e1c300004f

function allAlone(house) {
  
    console.log(house)
    const N = house.length
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const queue = [findPotus(house, 'X')]
    const visited = new Set()
    visited.add(findPotus(house,'X').join(','))
    
    while (queue.length > 0) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
        const pos = queue.shift()
        if (house[pos[0]][pos[1]] ===  'o') return false
         for (const dir of directions) {
           const new_pos = [pos[0] + dir[0], pos[1] + dir[1]]
           console.log(new_pos)
           const key = new_pos.join(",")
           if (     
           house[new_pos[0]][new_pos[1]] !== "#" &&
           !visited.has(key)
           ) {
             queue.push(new_pos)
             console.log('check' , queue)
             visited.add(key)
           }
         }
      }
    }
    console.log(visited)
     return true 
  }
  
  
  
  function findPotus(house, potus) {
    for (var i = 0; i < house.length; i++) {
      for (var j = 0; j < house[i].length; j++) {
        if (house[i][j] === potus) {
          return [i, j]
        }
      }
    }
    return -1
  }