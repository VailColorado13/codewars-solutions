//Solution for 5 kyu The Wrong-Way Cow 
//Link to Kata: https://www.codewars.com/kata/57d7536d950d8474f6000a06

function findWrongWayCow(field) {
    const width = field[0].length 
    const height = field.length
    let cows = {north: [], south: [], east: [], west: []}
    let visited = new Set()
    
    
    for (let i = 0; i < height; i++) {
       for(let j = 0; j < width; j++) {
         const currentPosition = field[i][j]
         const coords = [j,i].join(',')
         if (currentPosition !== 'c') {
           visited.add(coords)
           continue
         }
         if (visited.has(coords)) continue
         
         //check for south facing cows: 
         if ((i + 2) < height) {
           let south = `${currentPosition}${field[i+1][j]}${field[i+2][j]}`
           if (south === 'cow') cows.south.push([j, i])
         }
         //check for north facing cows: 
         if ((i - 2) >= 0) {
           let north = `${currentPosition}${field[i-1][j]}${field[i-2][j]}`
           if (north === 'cow') cows.north.push([j, i])
         }
         
         //check for east facing cows: 
         if ((j + 2) < width) {
           let east = `${currentPosition}${field[i][j+1]}${field[i][j +2]}`
           if (east === 'cow') cows.east.push([j, i])
         }
         
         //check for west facing cows: 
         if ((j - 2) >= 0) {
           let west = `${currentPosition}${field[i][j-1]}${field[i][j-2]}`
           if (west === 'cow') cows.west.push([j, i])
         }
       }
    }
    
     for (const dir in cows) {
       if (cows[dir].length === 1) return cows[dir][0]
     }
   
}