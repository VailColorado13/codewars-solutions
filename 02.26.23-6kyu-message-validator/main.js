//Solution for 6kyu Message Validator
//link to kata: https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

function isAValidMessage(message){
   let digitRegex = /\d+/
    
   let split = message.replace(/\d+/g, element => ` ${element} `).split(' ').filter(element => element !== '')

   let numsOnly = []
   let wordsOnly = []
   

  if (split.length % 2 !== 0) return false 
  
  
  for (let i = 0; i < split.length; i+= 2) {
    const num = Number(split[i])
    if (isNaN(num)) return false
    if (split[i + 1].length !== num) return false 
    
  }
    
    return true  
}