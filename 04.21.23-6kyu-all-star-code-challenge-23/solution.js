//Solution for 6 kyu All Star Code Challenge #23 
//Link to Kata: https://www.codewars.com/kata/5865dd726b56998ec4000185

function scoring(array){
  let totals = []
  
  array.forEach(player => {
    let score = 0 
    
    score += player.normKill * 100
    score += player.assist * 50
    score += player.damage * 0.50
    score += player.healing
    score += player.envKill * 500
    score += 2**player.streak
    
    totals.push([player.name, score])
    
  }) 
  
  totals = totals.sort((a, b) => b[1] - a[1])
  
  totals = totals.map(pair => pair[0])
  
  return totals
  
}