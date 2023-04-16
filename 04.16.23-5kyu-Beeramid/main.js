//Solution for 5kyu Beeramid
//Link to Kata: https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

var beeramid = function(bonus, price) {
    let totalBeers = Math.floor(bonus/price)
    let levels = 1  
    let beersNeeded = levels*levels
    
    while (totalBeers >= beersNeeded) {
      totalBeers -= beersNeeded
      levels++
      beersNeeded = levels*levels
    }
    
    return levels -1
  }