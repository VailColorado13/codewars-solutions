//Solution for 6kyu String Average
//Link to Kata: https://www.codewars.com/kata/5966847f4025872c7d00015b/solutions/javascript


function averageString(str) {
  
    if (!str.length) return 'n/a'
    
    let lookup = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    }
    
    let arr = str.split(' ')
    let total = 0

    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in lookup === false) return 'n/a'
      else total += lookup[arr[i]]    
    }
    
    let average = Math.floor(total/arr.length)
   
    let revLookup = Object.keys(lookup) 
    
    return revLookup[average]
  }
