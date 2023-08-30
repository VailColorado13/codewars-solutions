//Solution for 5 kyu Kingdoms Ep.3: Archery Tournament 
//Link to Kata: https://www.codewars.com/kata/616eedc41d5644001ff97462/javascript

function countAndSort(target) {
    let bullseye = Math.floor(target.length / 2)
    let tracker = {}
    
    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < target.length; j++) {
        if (target[i][j] === '*') continue
        else {
          //calculate the length away from the edge 
          const letter = target[i][j].toLowerCase()
          let distanceFromCenter = Math.max(Math.abs(bullseye - i), Math.abs(bullseye - j))
          let pointsAwarded = bullseye - distanceFromCenter + 1 
          let capitalized = target[i][j] === target[i][j].toUpperCase() ? 2 : 1 
          if (!tracker[letter]) {
            tracker[letter] = {}
            tracker[letter].score = pointsAwarded*capitalized
            tracker[letter].quantity = capitalized
          } 
          else {
            tracker[letter].score +=  pointsAwarded*capitalized
            tracker[letter].quantity += capitalized
          }
        }
      }
    }
    
    const result = Object.entries(tracker).map(([letter, { score, quantity }]) => [letter, score, quantity])
    
    return result.sort((entryA, entryB) => {
      // Sort by score in ascending order
      if (entryA[1] !== entryB[1]) {
        return entryA[1] - entryB[1]
      }
  
      // If scores are equal, sort by quantity of arrows in descending order
      if (entryA[2] !== entryB[2]) {
        return entryB[2] - entryA[2]
      }
  
      // If quantities of arrows are equal, sort by letters in UTF-16 ascending order
      return entryA[0].localeCompare(entryB[0])
    }).map(array => array[0])
        
}