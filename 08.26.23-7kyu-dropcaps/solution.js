//Solution for 7 kyu Dropcaps 
//Link to Kata: https://www.codewars.com/kata/559e5b717dd758a3eb00005a/javascript

function dropCap(string) {
  let array = string.split(' ')
  console.log(array)
  let dropCaps = array.map(word => {
    if (word.length > 2) {
      word = word.toLowerCase()
      return `${word[0].toUpperCase()}${word.substring(1)}`
    }
    else return word
  })
  
  return dropCaps.join(' ')
  

}