//Solution for 6kyu Perfect Square
//Link to Kata: https://www.codewars.com/kata/584e93a70f60247eb8000132


function perfectSquare(string){
  console.log(string)

 const array = string.split('\n')
 if (array[0].length === 1 && array.length === 1 && array[0][0] === '.') return true
 if (array[0].length === 1) {return false}
 if (array.length === 1) {return false}
 const lengths = array.map(string => string.length)
 const max = Math.max(...lengths)
 const min = Math.min(...lengths)
 
 const charCheck = array.map((dots) => dots.split('').filter((dot) => dot !== '.')).filter((arr) => arr.length)

 
 if (min === max && charCheck.length === 0) return true
  else return false
}