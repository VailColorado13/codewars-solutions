//Solution for 6kyu Remember 
//Link to kata: https://www.codewars.com/kata/55a243393fb3e87021000198/solutions/javascript

function remember(str) {
  
    let counts = {}
    let result = []
    
    for (let i = 0; i < str.length; i++) {
      
      if (!counts[str[i]]) {counts[str[i]] = 1}
      else {counts[str[i]]++}
      
      if (counts[str[i]] === 2) result.push(str[i])
    }
   
  return result
}