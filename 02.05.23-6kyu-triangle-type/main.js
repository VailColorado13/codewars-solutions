//Solution for 6kyu Triangle Type
//Link to Kata: https://www.codewars.com/kata/53907ac3cd51b69f790006c5/javascript

function triangleType(a, b, c){
    
    let C =  Math.acos((a**2 + b**2 - c**2) / (2*a*b))
    let A =  Math.acos((c**2 + b**2 - a**2) / (2*c*b))
    let B =  Math.acos((c**2 + a**2 - b**2) / (2*c*a))
  
  
    function radianToDegrees(radian) {
      return radian * (180/Math.PI);
    }
  
    const result = [radianToDegrees(A), radianToDegrees(B), radianToDegrees(C)] 
  
    if (result.includes(0)) return 0
    if (result.includes(NaN)) return 0
    if (result.every(angle => angle < 90)) return 1
    if (result.includes(90)) return 2
    if (result.some(angle => angle > 90)) return 3
  }