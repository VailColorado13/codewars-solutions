//Solution for 7 kyu Red Knight 
//Link to Kata: https://www.codewars.com/kata/5fc4349ddb878a0017838d0f


function redKnight(N, P) {
    let y = P*2 
    let white = false 
    
    if ((y/2) % 2 === 0) {
     if (N === 1) white = false 
     if (N === 0) white = true
    }else { 
     if (N === 1) white = true 
     if (N === 0) white = false
    }
    
    
    
    return [`${white ? 'White' : 'Black'}`    , y]
    
    
  }