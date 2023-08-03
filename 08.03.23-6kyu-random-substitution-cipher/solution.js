//Solution for 6 kyu Random Substitution Cipher 
//Link to Kata: https://www.codewars.com/kata/5943bf2895d5f74cfb000032

function randomSub() {
  
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let  usedletters = []
  let cipher = {}
  alphabet.forEach((letter) => {
    let alreadyUsed = true
    let value
    while (alreadyUsed === true) {
      const temp = alphabet[Math.floor(Math.random() * 26)]
      if (!usedletters.includes(temp)) {
        alreadyUsed = false
        value = temp
      }
      cipher[letter] = value
    }
    usedletters.push(value)
  })  
  return cipher
}