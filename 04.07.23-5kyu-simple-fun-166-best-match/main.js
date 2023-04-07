//Solution for 5kyu Simple Fun #166 Best Match 
//Link to Kata: https://www.codewars.com/kata/58b38256e51f1c2af0000081

function bestMatch(ALAHLYGoals, zamalekGoals) {
    let differences = []
    
    
    
    for (let i = 0; i < ALAHLYGoals.length; i++) {
      
      differences.push(ALAHLYGoals[i] - zamalekGoals[i])
      
    }
    
    let min = Math.min(...differences)
    let contenders = []
    
    
    
    for (let i = 0; i < differences.length; i++) {
     
      if (differences[i] === min) contenders.push(i)
    }
    
   let pairs = []
    
    contenders.forEach((index) => {
      
      pairs.push([index, zamalekGoals[index]])
      
      
    })
    
    
   let sorted = pairs.sort((a, b) => b[1] - a[1])
  
   
   return sorted[0][0]
    
  }
