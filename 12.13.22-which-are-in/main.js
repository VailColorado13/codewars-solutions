//Solution for 6kyu Which are In? 
//link to kata: https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript


function inArray(array1,array2){  
    let string = array2.join(',')
    let res = []
    
    for (let i = 0; i < array1.length; i++) {     
     if (string.search(array1[i]) !== -1) res.push(array1[i])
    }    
    return res.sort().filter(Boolean)
  }
  