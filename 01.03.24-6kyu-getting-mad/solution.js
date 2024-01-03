//Solution for 6 kyu Getting MAD 
//Link to Kata: https://www.codewars.com/kata/593a061b942a27ac940000a7/javascript


function gettingMad(array) {
    let min = Infinity 
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i === j) continue
        else {
          min = Math.min(min, Math.abs(array[i] - array[j]))
        }
      }
    }
  return min
}