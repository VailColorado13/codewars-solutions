//Solution for 6 kyu Combination Lock 
//Link to Kata: https://www.codewars.com/kata/630e55d6c8e178000e1badfc


function degreesOfLock(initial, first, second, third) {
    let total = 1080
    let firstRotation, secondRotation, thirdRotation
    let dialClockwise = [0]
    for (let i = 1; i <= 39; i++) {
      dialClockwise.push(40 - i)
    }
  
    let dialCounterClockwise = dialClockwise.reverse()
  
    console.log(dialCounterClockwise)
    
    //find the difference in indexes between initial and first in the dialClockwise array
    
    let posInit = dialClockwise.indexOf(initial) 
    let posFirstA = dialClockwise.indexOf(first)
  
    
   if (posInit < posFirstA) {
         firstRotation = Math.abs(posInit - 0) + Math.abs(posFirstA - 40) 
   } else firstRotation = Math.abs(posInit - posFirstA) 
    
    firstRotation = firstRotation * 9
    
    
    
    
    
    
    
    
    
    //find the difference in indexes between first and second in the dialCounterClockwise array
  
    let posFirstB = dialCounterClockwise.indexOf(first)
    let posSecondA = dialCounterClockwise.indexOf(second)
    
    if (posFirstB > posSecondA) {
      secondRotation = Math.abs(posFirstB - 40) + Math.abs(posSecondA - 0) 
    } else secondRotation = Math.abs(posFirstB - posSecondA) 
    
    
    secondRotation = secondRotation * 9
    
    
    
    
    
    
    
  
  
   //find the difference in indexes between second and third in the dialClockwise array
  
    let posSecondB = dialClockwise.indexOf(second) 
    let posThird =  dialClockwise.indexOf(third) 
    
    
    if (posSecondB < posThird) {
         thirdRotation = Math.abs(posSecondB - 0) + Math.abs(posThird - 40) 
   } else thirdRotation = Math.abs(posSecondB - posThird) 
    
    thirdRotation = thirdRotation * 9
    
    
    
    
    
    
    console.log(firstRotation, secondRotation, thirdRotation)
  
    return total + firstRotation + secondRotation + thirdRotation
    
  }