//Solution for 7kyu indexed Capitalization
//link to kata: https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/javascript



function capitalize(s,arr){

    let letters = s.split('')
    let result = ''
    for (let i = 0; i < letters.length; i++) {
      if (arr.includes(i)) {result += letters[i].toUpperCase()}
      else result += letters[i] 
    }

  return result
  
}