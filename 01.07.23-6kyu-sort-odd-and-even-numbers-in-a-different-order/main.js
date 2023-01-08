//Solution for 6kyu sort odd and even numbers in a different order 
//Link to Kata: https://www.codewars.com/kata/5a1cb5406975987dd9000028/javascript


function sortArray(array) {
  let evens = array.filter(num => num % 2 === 0).sort((a,b) => a -b)
  let odds = array.filter(num => num % 2 !== 0).sort((a,b) => a -b)
  
  let answer =[]
  
  for (let i =0; i < array.length; i++) {
    if (array[i] % 2 === 0) answer.push(evens.pop())
    else answer.push(odds.shift())
  }
  
  return answer
}