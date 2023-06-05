//Solution for 6 kyu Fruit Machine 
//Link to Kata: https://www.codewars.com/kata/590adadea658017d90000039/javascript


function fruit(reels, spins){
  const scoreCard = {
    "Wild": [100, 10],
    "Star": [90, 9, 18],
    "Bell": [80, 8, 16],
    "Shell": [70, 7, 14],
    "Seven": [60, 6, 12],
    "Cherry": [50, 5, 10],
    "Bar": [40, 4, 8],
    "King": [30, 3, 6],
    "Queen": [20, 2, 4],
    "Jack": [10, 1, 2]
  }
  
  let results = [reels[0][spins[0]]  , reels[1][spins[1]] , reels[2][spins[2]]   ]
 
  let counts = results.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 1
    else obj[item]++
    return obj
  },{})
  
  if (counts.Wild > 1) {
    return scoreCard.Wild[3 - counts.Wild]
  }
  
  else if (counts.Wild === 1) {
    for (const slot in counts) {
      if (counts[slot] > 1) {
        return scoreCard[slot][2]
      }
    }
   return 0
  }
  else {
    for (const slot in counts) {
      if (counts[slot] > 1) {
        return scoreCard[slot][3 - counts[slot]]
      }
    }
    return 0
  }
 
}