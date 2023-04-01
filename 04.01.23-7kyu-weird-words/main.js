//solution for 7kyu weird words
//link to kata: https://www.codewars.com/kata/57b2020eb69bfcbf64000375/discuss/javascript

function nextLetter(str) {
    let lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"  
    let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    let answer = []
    let array = str.split('')
    let letters = /[a-z]/i
  
    array.forEach(char => {
      if (!letters.test(char)) {
        answer.push(char)
      }
      else if (char.toUpperCase() === char) {
        let index = uppercaseAlphabet.indexOf(char)
        answer.push(uppercaseAlphabet[(index +1) % 26])
      }
      else {
        let index = lowercaseAlphabet.indexOf(char)
        answer.push(lowercaseAlphabet[(index +1)  % 26])
      }
    })
    return answer.join('') 
  }