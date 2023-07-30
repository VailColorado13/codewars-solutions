//Solution for 6 kyu Modulus 11 - Check Digit 
//Link to Kata: https://www.codewars.com/kata/568d1ee43ee6afb3ad00001d


function addCheckDigit(number) {
   
      let numArr = number.split('').map(number => Number(number))
      let distanceFromEnd = 0
      let factors = [2,3,4,5,6,7]
      let productSum = 0
     
      
      for (let i = numArr.length - 1; i >= 0; i--) {
        const factor = factors[distanceFromEnd % 6]
        productSum+=(factor*numArr[i])
        distanceFromEnd++
      }

     const remainder = productSum % 11
     
     const checkNum = remainder === 0 ? '0' : remainder === 1 ? 'X' : 11 - remainder

  
   return `${number}${checkNum}` 
      
  

  
}