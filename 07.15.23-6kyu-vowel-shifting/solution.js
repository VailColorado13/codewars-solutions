//Solution for 6 kyu Vowel Shifting 
//Link to Kata: https://www.codewars.com/kata/577e277c9fb2a5511c00001d/javascript

function vowelShift(text, n) {
  if (text === null || text.length === 0) return text
  
  const vowels = /[aeiou]/i
  let consonantsAndNulls = []
  let vowelsArr = []
  
  for (let i = 0; i < text.length; i++) {
    if (text[i].match(vowels)) {
      consonantsAndNulls.push(null)
      vowelsArr.push(text[i]) 
    }
    else consonantsAndNulls.push(text[i])
  }
  if (n > 0) {
        while (n > 0) { 
          let last = vowelsArr.pop()
          vowelsArr.unshift(last)
          n--
        }
    }
  
  if (n < 0) {
        while (n < 0) { 
          let first = vowelsArr.shift()
          vowelsArr.push(first)
          n++
        }
    }
  
  let final = consonantsAndNulls.map(letter => {
    if (letter === null) return vowelsArr.shift()
    else return letter
  })

}