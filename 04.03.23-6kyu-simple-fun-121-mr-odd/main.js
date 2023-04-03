//solution for 6kyu Simple Fun 121: Mr. Odd 
//link to kata: https://www.codewars.com/kata/589d74722cae97a7260000d9/discuss/javascript

function odd(str) {
    let count = 0
    let foundOdd = true 
     str = str.split('')
    
    while (foundOdd) {
      let odd = ['o', 'd', 'd']
      
      for (let i = 0; i < str.length; i++) {
        if (str[i] === odd[0]) {
          str[i] = '.'
          odd.shift()
        }
      }
      if (odd.length != 0) {foundOdd = false}
      else (count++)  
    }
 
  return count
  
}