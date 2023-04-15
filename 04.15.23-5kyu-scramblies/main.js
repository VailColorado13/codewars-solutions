//Solution for 5kyu Scramblies
//Link to kata: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript

function scramble(letters, word) {  
    let counts = {};
       for (let char of letters) {
         if (counts[char]) counts[char] = counts[char] + 1
         else counts[char] = 1
       }
   for (let i = 0; i < word.length; i++) {
     if (word[i] in counts && counts[word[i]] !== 0) {
       counts[word[i]] = counts[word[i]] -1
     }else return false
   }
 return true
}

