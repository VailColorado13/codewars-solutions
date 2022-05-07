//Solution for 7 kyu Odd-Even String Sort 
//Link to Kata: https://www.codewars.com/kata/580755730b5a77650500010c


function sortMyString(S) {
    
  let evens = ''
  let odds = ''
  
  for (let i = 0; i < S.length; i++) {
    i % 2 === 0 ? evens+= S[i] : odds+= S[i]
  }
  
  
  
  return evens + ' ' + odds
  
}