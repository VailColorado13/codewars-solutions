//Solution for 7kyu Mispelled Words 
//Link to kata: https://www.codewars.com/kata/5892595f190ca40ad0000095/solutions/javascript

var mispelled = function(word1, word2){

  if (word1.length === word2.length) {
    let counter = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) counter++ 
    }
    return counter < 2
  }
  
  else {
    if (Math.abs(word1.length - word2.length) > 1) return false 
    else {
      if (word1.search(word2) !== -1 || word2.search(word1) !== -1) return true
    }
    return false 
  }

}
