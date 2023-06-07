//Solution for 7 kyu Sum of integers in string 
//Link to Kata: https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){
   
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
    s = s.split('').map((char) => {
      if (digits.includes(char)) {return char}
      else return(',')
    })
  
    let numbers = s.join('').split(',').filter(Boolean).map(str => Number(str))
      
    return numbers.length === 0 ? 0 : numbers.reduce((pv, cv) => pv + cv)
}