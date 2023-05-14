//Solution for 6 kyu Dbftbs Djqifs 
//Link to Kata: https://www.codewars.com/kata/546937989c0b6ab3c5000183/javascript

function encryptor (key, message) {
	const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseString = "abcdefghijklmnopqrstuvwxyz"
  let response = ''

  
  message.split('').forEach((letter) => {
    
    
    if (!uppercaseString.includes(letter) && !lowercaseString.includes(letter)) response+= letter
    
    else if (uppercaseString.includes(letter)) {
      const index = uppercaseString.indexOf(letter)
      const newIndex = (index + key) % 26
      const newLetter = newIndex >= 0 ? uppercaseString[newIndex] : uppercaseString[26 + newIndex]
      response += newLetter
    }
    
    else if (lowercaseString.includes(letter)) {
      const index = lowercaseString.indexOf(letter)
      const newIndex = (index + key) % 26
      const newLetter = newIndex >= 0 ? lowercaseString[newIndex] : lowercaseString[26 + newIndex]
      response += newLetter
    }
    
  })
  
  return response

}