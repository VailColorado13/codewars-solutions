//Solution for 6 kyu Simple Fun #160: Cut The Ropes 
//Link to Kata: https://www.codewars.com/kata/58ad388555bf4c80e800001e


function cutTheRopes(a) {
  
  let ropesRemaining = []
  
  while (a.length) {
    ropesRemaining.push(a.length)
    const min = Math.min(...a)
    a = a.map(rope => rope - min)
    a = a.filter(Boolean)
  }
  return ropesRemaining
  
}