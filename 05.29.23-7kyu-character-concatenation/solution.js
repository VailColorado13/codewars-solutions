//Solution for 7 kyu Character Concatenation 
//Link to Kata: https://www.codewars.com/kata/55147ff29cd40b43c600058b/javascript

function charConcat(string){
    let newString = ''
    let answer = ''
    let counter = 1 
    
    if (string.length % 2) {
      let centerElem = Math.floor(string.length/2) 
      for (let i = 0; i < string.length; i++) {
        if (i === centerElem) continue
        else newString += string[i]
      }
    } 
    string = newString.length ? newString : string
    string = string.split('') 
   
    while (string.length) {
      answer += string.shift()
      answer += string.pop()
      answer += String(counter)
      
      counter++ 
    }
    
    return answer 
}