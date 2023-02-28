//Solution for 6kyu KaKaKa Cypher
//https://www.codewars.com/kata/5934d648d95386bc8200010b

function kaCokadekaMe(word) {
  
  let result = 'ka'
  let vowels = /[aeiou]/i

  
  for (let i = 0; i < word.length; i++) {
    if (!vowels.test(word[i])) result+= word[i]
    if (vowels.test(word[i]))  {
      if (vowels.test(word[i+ 1])) {result += word[i] }
      else result += `${word[i]}ka`
    }
  }
  
  return result
  
}