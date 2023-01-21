//Solution to 5kyu Conway's Look and Say - Generalized
//Link to Kata: https://www.codewars.com/kata/530045e3c7c0f4d3420001af/discuss/javascript

function lookSay(number){
  
    let string = number.toString()
   string += '*'
    
    let addSpaces = []
    
    for (let i = 0; i < string.length -1; i++) {
      if (string[i +1] !== string[i]) {
        addSpaces.push(string[i])
        addSpaces.push(' ')
      }
      else addSpaces.push(string[i])
    }
    
    let newStr = addSpaces.join('')
    let array = newStr.split(' ').filter(Boolean) 
    
    let answer = ''
    
    for (let i = 0; i < array.length; i++) {
        let length = String(array[i].length)
        answer += `${length}${array[i][0]}`
    }
    
   return Number(answer)
    
  }