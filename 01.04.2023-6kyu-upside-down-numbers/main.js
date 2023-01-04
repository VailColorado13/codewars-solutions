//Solution for 6kyu Upside Down Numbers
//https://www.codewars.com/kata/59f7597716049833200001eb/javascript

function solve(x, y) {
  
  const lookup = {
     0: '0',
     1: '1',
     2: NaN,
     3: NaN,
     4: NaN,
     5: NaN,
     6: '9',
     7: NaN,
     8: '8',
     9: '6',
  }
  
  let count = 0
  for (let i = x; i < y; i ++) {
    
    let tempStr = String(i).split('').reverse()
    let replace = tempStr.map(number => number = lookup[number])
    if (Number(replace.join('')) === i) {
      count++}
    }
  
  return count
}