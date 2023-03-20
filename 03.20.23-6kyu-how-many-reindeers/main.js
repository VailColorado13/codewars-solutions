//Solution for 6kyu how many reindeers? 
//Link to kata: https://www.codewars.com/kata/52ad1db4b2651f744d000394/train/javascript


function reindeers(presents) {  
  let total = 2 + Math.ceil(presents/30)
  
 if (total > 8) {throw new Error}
  else return total 
}