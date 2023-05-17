//Solution for 6 kyu Number Format 
//Link to Kata: https://www.codewars.com/kata/565c4e1303a0a006d7000127


var numberFormat = function (number) {

  let negative = number < 0 

  number = String(number).split('')
  
  if (negative) {number.shift()}
    
  let counter = 0
  let answer = []
  while (number.length) {
    counter++
    answer.unshift(number.pop())
    if (counter === 3 && number.length) {
      answer.unshift(',')
      counter = 0 
    }
  }

  if (negative) {answer.unshift('-')}
  
  return answer.join('')
}