//Solution for 6 kyu Grill it! 
//Link to Kata: https://www.codewars.com/kata/595b3f0ad26b2d817400002a

function grille(message, code) {
  
  let decode = ''
  
   let bin = code.toString(2).split('')
    
   if (bin.length < message.length) {
         while (bin.length < message.length) {
           bin.unshift(0)
         }
  }
  
   if (message.length < bin.length) {
     message = message.split('')
         while (message.length < bin.length) {
           message.unshift('æ')
         }
     message = message.join('')
     
  }
  for (let i = 0; i < message.length; i++) {
    if (bin[i] === '1' && message[i] !== 'æ') {
      decode+= message[i]
    } 
  }
  return decode
  
}