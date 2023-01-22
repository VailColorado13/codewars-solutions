//Solution for 6kyu Find the Nexus of the Codewars Universe
//Link to kata: https://www.codewars.com/kata/5453dce502949307cf000bff

function nexus(users) {
    const entries = Object.entries(users).map(entry => entry.map(number => Number(number)))
    
    const difference = entries.map(numbers => {
      
      return Math.abs(numbers[0] - numbers[1])
      
    })
    
    const lowest = Math.min(...difference)
    
    
    const indexOfLowest = difference.indexOf(lowest)
    
    return entries[indexOfLowest][0]
    
  }