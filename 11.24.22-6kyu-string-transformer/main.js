//Solution for codewars 6kyu String Transformer 
//Link to Kata: https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
    let letterArr = str.split('')
    let allUpperCase = letterArr.map(letter => letter.toUpperCase())
    let finalCase = []
    
    for (let i = 0; i < letterArr.length; i++) {
      if (letterArr[i] === allUpperCase[i]) {finalCase.push(letterArr[i].toLowerCase())}
      else {finalCase.push(letterArr[i].toUpperCase())}
    }

 
return finalCase.join('').split(' ').reverse().join(' ')
   

}