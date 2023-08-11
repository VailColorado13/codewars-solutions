//Solution for 6 kyu The Rhinestone Cowboy ~ Count the dollars in his boots! 
//Link to Kata: https://www.codewars.com/kata/58a2a561f749ed763c00000b/javascript


function cowboysDollars(boots) {
    let leftBoot = boots[0].split('\n')
    let rightBoot = boots[1].split('\n')
    
    const findIndexOfAmpersand = (boot) => {
      for (let i = 0; i < boot.length; i++) {
        if (boot[i].indexOf('&') !== -1) return i
      }
    }
    
    let leftTops = leftBoot.slice(0 ,findIndexOfAmpersand(leftBoot))
    let rightTops = rightBoot.slice(0 ,findIndexOfAmpersand(rightBoot))
    
    const leftDollars = leftTops.filter(row => row.indexOf('[(1)]') !== -1).length
    const rightDollars = rightTops.filter(row => row.indexOf('[(1)]') !== -1).length
    
    
    return `This Rhinestone Cowboy has ${rightDollars} dollar bills in his right boot and ${leftDollars} in the left`
    
  }