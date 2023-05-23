//Solution for 6 kyu Uncollapse Digits 
//Link to Kata: https://www.codewars.com/kata/5a626fc7fd56cb63c300008c

function uncollapse(digits){
  
  const pattern = /(zero|one|two|three|four|five|six|seven|eight|nine)/g

  const matches = digits.match(pattern)
  
  return matches.join(' ')
  
}