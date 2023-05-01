//Solution for 7 kyu Array Array Array 
//Link to Kata: https://www.codewars.com/kata/57eb936de1051801d500008a

function explode(x){
  
  if (typeof x[0] === 'string' && typeof x[1] === 'number') { 
    return Array(x[1]).fill(x)
  }
  
  if (typeof x[1] === 'string' && typeof x[0] === 'number') { 
    return Array(x[0]).fill(x)
  }
  
  if (typeof x[1] === 'number' && typeof x[0] === 'number') { 
    return Array(x[1] + x[0]).fill(x)
  }
  
  else return 'Void!'
  
}
