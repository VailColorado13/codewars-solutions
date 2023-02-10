//Solution for 6kyu Hamming Distance
//Link to kata: https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/solutions/javascript

function hamming(a,b) {

    let ham = 0
    
    for (let i = 0; i < a.length; i++) {
      a[i] === b[i] ? ham = ham : ham++
    } 
  
    return ham
    
  }