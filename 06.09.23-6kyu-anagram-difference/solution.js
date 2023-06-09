//Solution for 6 kyu Anagram difference 
//Link to Kata: https://www.codewars.com/kata/5b1b27c8f60e99a467000041/javascript

function anagramDifference(w1,w2){
   w1 = w1.split('')
   w2 = w2.split('')
  
  
  let w1Filter = w1.filter(letter => w2.includes(letter))
  let w2Filter = w2.filter(letter => w1.includes(letter))
  
  let removed = [w1.length - w1Filter.length, w2.length - w2Filter.length]
  
  let w1Counts = w1Filter.reduce((counts, letter) => {
    if (!counts[letter]) counts[letter] = 1 
    else counts[letter]++
    return counts 
  },{})
  
  let w2Counts = w2Filter.reduce((counts, letter) => {
    if (!counts[letter]) counts[letter] = 1 
    else counts[letter]++
    return counts 
  },{})
  
  for (const letter in w1Counts) {
    removed.push(Math.abs(w1Counts[letter] - w2Counts[letter]))
  }
  
  return removed.reduce((pv, cv) => pv + cv)
   
}