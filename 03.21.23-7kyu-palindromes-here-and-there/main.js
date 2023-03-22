//Solution for 7kyu palindromes here and there 
//link to kata: https://www.codewars.com/kata/5838a66eaed8c259df000003

function convertPalindromes(numbers) {
    numbers = numbers.map(num => String(num))
   
   let result = numbers.map(str => {
     
     return str === str.split('').reverse().join('') ? 1 : 0
     
   })
 
   return result
 }