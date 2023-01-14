//Solution for 6kyu Collatz 
//link to kata: https://www.codewars.com/kata/5286b2e162056fd0cb000c20/solutions/javascript


function collatz(n){
  
    let array = []
    array.push(n)
    
    while (array[array.length -1] !== 1) {
      let last = array[array.length -1]
      if (last  % 2 ===0) array.push(last / 2)
      else array.push(last* 3 + 1)
    }
    
   return array.join('->')
    
}


