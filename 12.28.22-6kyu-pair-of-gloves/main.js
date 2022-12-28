//Solution for 6kyu pair of gloves 
//Link to Kata: https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves) {

  let counts = gloves.reduce((obj, color) => {
    if (!obj[color]) obj[color] = 1
    else obj[color]++ 
    return obj  
  }, {})
  
  let result = []
  
  for (let color in counts) {
    result.push(Math.floor(counts[color] /2 ))
  }
  
  return result.reduce((pv,cv) => pv + cv, 0)  
  
}