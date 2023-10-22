//Solution for 6 kyu It's Raining Tacos 
//Link to Kata: https://www.codewars.com/kata/64f4ef596f222e004b877272/javascript


function rainTacos(landscape) {
    landscape = landscape.split('\n').map(str => str.split(''))
    const length = landscape[0].length
    const taco = 'TACO'
    
    for (let i = 0; i < length; i++) {
      const letter = taco[i % 4]
      const currentColumn = landscape.map(row => row[i])
      let fallToRow = -1
      for (let j = 0; j < currentColumn.length; j++) {
        if (currentColumn[j] === ' ') fallToRow++
        else break
      } 
      if (fallToRow === -1) continue
      else landscape[fallToRow][i] = letter
     
   
    }
     return landscape.map(row => row.join('')).join('\n')
    
  }