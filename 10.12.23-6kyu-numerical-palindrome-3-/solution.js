//Solution for 6 kyu Numerical Palindrome #3  
//Link to Kata: https://www.codewars.com/kata/58df62fe95923f7a7f0000cc/javascript

function palindrome(num) { 
  if (typeof(num) !== 'number') return "Not valid"
  if (num < 0) return "Not valid"
  
  let counter = 0 
  num = String(num)
  
  for (let i = 0; i < num.length; i++) {
    for (let j = i+1; j < num.length; j++) {
      let check = num.substring(i,j+1).split('')
      let reverse = check.slice()
      reverse.reverse()
      if (reverse.join('') === check.join('') && check.length > 1)  counter++
    }
    
  }
  return counter
}