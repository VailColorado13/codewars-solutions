//Solution for 6 kyu Rank Vector 
//Link to Kata: https://www.codewars.com/kata/545f05676b42a0a195000d95


function ranks(a) {
  let duplicate = a.slice()
  let order  = duplicate.sort((a, b) => b - a)

  return a.map(number => order.indexOf(number) + 1)
  
}