//solution for 7kyu merge overlapping strings 
//link to kata: https://www.codewars.com/kata/61c78b57ee4be50035d28d42/solutions/javascript

function mergeStrings(first, second){
  
    if (first === second) {return first}
    
    for (let i = second.length - 1; i >= 0; i--) {
      const start = second.slice(0, i)
      const end = second.slice(i)
  
      if (first.endsWith(start)) {
        return first + end
      }
    }
    
    return first + second
    
  }