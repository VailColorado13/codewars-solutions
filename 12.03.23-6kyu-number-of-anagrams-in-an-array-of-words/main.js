//Solution for 6kyu Number of anangrams in an array of words 
//link to kata: https://www.codewars.com/kata/587e18b97a25e865530000d8/javascript

function anagramCounter (wordsArray) {
    let arrays = wordsArray.map(word => word.split(''))
    let sortedStrings = arrays.map(array => {
      return array.sort()
    }).map(array => array.join(''))
    
    let counts = sortedStrings.reduce((obj, word) => {
      if (!obj[word]) obj[word] = 1
      else obj[word]++    
      return obj
    },{})                                                              
  
    let values = Object.values(counts)
    
    let pairs = values.map(value => (value*(value -1))/2)
  
    return pairs.reduce((pv,cv) => pv + cv,0)
  }

