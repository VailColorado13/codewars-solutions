//Solution for 6kyu reverse vowels in a string 
//link to kata: https://www.codewars.com/kata/585db3e8eec141ce9a00008f/javascript



function reverseVowels(str) {
  let vowels = str.split('').filter(letter => letter.match(/[aeiouAEIOU]/))
  let cons = str.split('').filter(letter => !letter.match(/[aeiouAEIOU]/))
 
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiouAEIOU]/))  {result.push(vowels.pop())}

    else result.push(cons.shift())
  
  }
  
  return result.join('')

}