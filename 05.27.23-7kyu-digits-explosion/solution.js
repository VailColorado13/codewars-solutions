//Solution for 7 kyu Digits explosion 
//Link to Kata: https://www.codewars.com/kata/585b1fafe08bae9988000314/javascript

function explode(s) {
  let answer = ''
  
  s.split('').forEach(number => { 
    const digit = Number(number)
    answer += number.repeat(digit)
  }) 
 
  return answer 
  
}