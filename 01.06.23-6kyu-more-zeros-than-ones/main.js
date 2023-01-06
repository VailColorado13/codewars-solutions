//Solution for 6kyu More Zeros than Ones 
//Link to Kata: https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/javascript

function moreZeros(s){
    let letterIndeces = s.split('')
    
    let binary = s.split('').map(letter => letter.charCodeAt(0).toString(2)).map(code => code.split(''))
    let lengthArray = binary.map(bin => bin.length)
                            
    for  (let i = 0; i < binary.length; i++) {
      for(let j = 0; j < binary[i].length; j++) {
        binary[i][j] = Number(binary[i][j])
      } 
    binary[i] = binary[i].reduce((pv, cv) => pv+ cv)
    }
    
    let sums = binary
    let result = []
    
    for (let i = 0; i <= sums.length; i++) {
      if (sums[i] < lengthArray[i]/2 && !result.includes(letterIndeces[i])) {result.push(letterIndeces[i])}
    }
    
  return result
    
  }