//Solution for 7 kyu Sum - Square Even, Root Odd 
//Link to Kata: https://www.codewars.com/kata/5a4b16435f08299c7000274f

const sumSquareEvenRootOdd = ns => {
 
    let sum = 0
    
    ns.forEach(number => {
      if (number % 2 === 0) {
        sum += number**2
      }
      else sum += Math.sqrt(number)
    })
   
     return Number(sum.toFixed(2))
     
}