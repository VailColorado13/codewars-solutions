//Solution for 5 kyu Magic The Gathering #2: Mana 
//Link to Kata: https://www.codewars.com/kata/567b22d9ba0e6b8c2400001e

function canCast(...stack) {
    const digitRegex = /\d+/g
    
    //create a count object for the totalManaAvailable
    
    let totalManaAvailable = stack.shift()
    let totalColorlessAvailable = totalManaAvailable.match(digitRegex)
                                  
    totalColorlessAvailable === null ? totalColorlessAvailable = 0 : totalColorlessAvailable = totalColorlessAvailable.reduce((pv,cv) => Number(pv) + Number(cv))
    
    totalManaAvailable = totalManaAvailable.split('').filter(char => !char.match(digitRegex))
   
    totalManaAvailable = totalManaAvailable.reduce((obj,letter) => {
      if (!obj[letter]) obj[letter] = 1
      else obj[letter]++
      return obj
    },{})
    
    totalManaAvailable.colorless = Number(totalColorlessAvailable)
    
    //create a count object for the totalManaNeeded 
    
    let totalManaNeeded = stack.join('')
    let colorlessNeeded = totalManaNeeded.match(digitRegex)
    
    colorlessNeeded === null ? colorlessNeeded = 0 : colorlessNeeded = colorlessNeeded.reduce((pv,cv) => Number(pv) + Number(cv))
  
    totalManaNeeded = totalManaNeeded.split('').filter(char => !char.match(digitRegex))
  
     totalManaNeeded = totalManaNeeded.reduce((obj,letter) => {
      if (!obj[letter]) obj[letter] = 1
      else obj[letter]++
      return obj
    },{})
    
    totalManaNeeded.colorless = Number(colorlessNeeded)
    
    //caveat: unused colored mana can be used as colorless mana
    
    for (const color in totalManaNeeded) {
      if (color !== 'colorless') {
        totalManaAvailable[color] -= totalManaNeeded[color]
      }
      if (totalManaAvailable[color] < 0) return false
    }
    
  
   
  
   
   let leftovers = Object.values(totalManaAvailable).reduce((pv,cv) => pv + cv)
   
   
   if (totalManaNeeded.colorless <= leftovers) return true
   else return false
  
    
  }