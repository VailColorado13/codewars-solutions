//Solution for 6 kyu The rarest pepe 
//Link to Kata: https://www.codewars.com/kata/595d4823c31ba629d90000d2

function findRarestPepe(pepes) {
    let counts = pepes.reduce((obj, pepe) => {
      if (!obj[pepe]) obj[pepe] = 1
      else obj[pepe]++
      return obj
    },{})
    
    counts = Object.entries(counts).sort((a, b) => a[1] - b[1])
  
    if (counts.length < 2) return 'No rare pepes!'
   
    const lowestCount = counts[0][1]
    
    if (lowestCount >= 5) return 'No rare pepes!'
    let rarest = counts.filter(count => count[1] === lowestCount).map(pair => pair[0])
    
    return rarest.length === 1 ? rarest[0] : rarest.sort()
  
  }
