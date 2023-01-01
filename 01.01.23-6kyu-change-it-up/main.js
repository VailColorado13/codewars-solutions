//Solution for 6kyu Change it up

//link to Kata: https://www.codewars.com/kata/58039f8efca342e4f0000023/javascript



function changer(str) { 
  let alpha = 'abcdefghijklmnopqrstuvwxyza'
  let lowerCase = str.toLowerCase().split('')
  
  for (let i = 0; i <= lowerCase.length; i++) {
    let index = alpha.indexOf(lowerCase[i])
      
    if (index === -1) continue 
    lowerCase[i] = alpha[index + 1]
  }
  
  let vowels = 'aeiou'
  
  
  for (let i = 0; i <= lowerCase.length; i++) {
    if (vowels.indexOf(lowerCase[i]) !== -1)
    lowerCase[i] = lowerCase[i].toUpperCase()
  }

  return lowerCase.join('')
}