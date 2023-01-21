//solution for 6yu Srot the inner ctonnet in dsnnieedcg oredr
//Link to kata: https://www.codewars.com/kata/5898b4b71d298e51b600014b/solutions/javascript


function sortTheInnerContent(words){

    words = words.split(' ')
    
    let sorted = words.map((word) => {
      
      if (word.length < 3) return word
      
      word = word.split('')
      const first = word.shift()
      const last = word.pop()
      
      const sorted = word.sort().reverse().join('')
      return `${first}${sorted}${last}`
      
    })
    
    return sorted.join(' ')
    
  }
