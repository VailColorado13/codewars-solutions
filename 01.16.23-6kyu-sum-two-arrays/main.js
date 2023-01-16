//Solution for 6kyu Sum Two Arrays
//Link to Kata: https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/javascript


function addArrays(array1, array2) {
    if (array1.length === 0  && array2.length === 0) return []
     
     let arrayToNumber1 = array1.length === 0 ? 0 : Number(array1.join(''))
     let arrayToNumber2 = array2.length === 0 ? 0 : Number(array2.join(''))
     
     
     let sum = arrayToNumber1 + arrayToNumber2
     let answer = String(sum).split('').map(str => Number(str))
     
     if (isNaN(answer[0])) {
       answer.shift()
       answer[0] = answer[0] * -1
     }
     
     return answer
   }