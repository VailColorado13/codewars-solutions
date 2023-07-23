//Solution for 6 kyu Walk-up Stairs  
//Link to Kata:  https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/solutions/javascript

function stairs(n) { 
 
    if (n<1) return ''
    let count = 1 
    let staircase = []
    while (count <= n) {
      let stairLeft = []
      let stairRight = []
      
      for (let i = 1; i <= count; i++) {
        stairLeft.push(i % 10)
        stairRight.unshift(i % 10)
      }
      
      staircase.push(stairLeft.concat(stairRight))
      count++ 
    }
    
   staircase = staircase.map(stair => stair.join(' '))
    
   const bottomStairLength = staircase[staircase.length -1].length
   
   staircase = staircase.map(stair => {
     const spacesNeeded = bottomStairLength - stair.length
     return `${' '.repeat(spacesNeeded)}${stair}`
   })
   
   return staircase.join('\n')
    
  }