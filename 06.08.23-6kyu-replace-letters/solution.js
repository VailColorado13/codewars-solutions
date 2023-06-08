//Solution for 6 kyu Replace letters 
//Link to Kata: https://www.codewars.com/kata/5a4331b18f27f2b31f000085/javascript


function replaceLetters(word) {
  let replacement = ''
  
   for (let i = 0; i < word.length; i++) {
     if (vowels.includes(word[i])) {
       let index = alphabet.indexOf(word[i])
       let foundConsonant = false    
       
       while (!foundConsonant) {
         index--
         if (index < 0) {
           foundConsonant = true 
           replacement += 'z'
         }
         
         else if (consonants.includes(alphabet[index % 26])) {
           foundConsonant = true      
           replacement += alphabet[index % 26]    
         }
       }
     }
     
     else {
       let index = alphabet.indexOf(word[i])
       let foundVowel = false 
       
       while (!foundVowel) {
         index++ 
         if (vowels.includes(alphabet[index % 26])) {
           foundVowel = true      
           replacement += alphabet[index % 26]  
       }
     }
   }
}
  return replacement
}