//Solution for 7 kyu Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark  
//Link to Kata: https://www.codewars.com/kata/57fafb6d2b5314c839000195/javascript


function remove (string) {
    string = string.split(' ')
    
    let filtered = string.map(word => {
      if (word.indexOf('!') === -1) return word 
      else if (word.indexOf('!') !== word.lastIndexOf('!')) return word
      else return ''   
    })
  
   return filtered.filter(Boolean).join(' ').trim()
  }