//Solution for 6kyu Survivors Ep.4
//Link to kata: https://www.codewars.com/kata/60a516d70759d1000d532029/javascript

function survivors(listOfMomentum, listOfPowerups) {

  let result = []
  
  for (let i = 0; i < listOfPowerups.length; i++) {
    
    let momentum = listOfMomentum[i]
    if (momentum === 0) continue
    
    for (let j = 0; j < listOfPowerups[i].length; j++) {
      momentum--
      momentum+= listOfPowerups[i][j]
      
      if (momentum < 1) break       
    }   
    
    if (momentum > 0) result.push(i)
    
  }
  return result
}