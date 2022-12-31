//Solution for 6kyu the Book for Mormon 
//link to kata: https://www.codewars.com/kata/58373ba351e3b615de0001c3/javascript


function Mormons(startingNumber, reach, target) {

  if (startingNumber >= target) {return 0}
  
  let count = 0
  
  while (target > startingNumber) {

    startingNumber = startingNumber + (startingNumber * reach) 
    count++ 
    
  }
  
  return count 
  
}
