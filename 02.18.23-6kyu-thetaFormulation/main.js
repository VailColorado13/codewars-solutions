//Solution for 6kyu Theta formulation 
//link to kata https://www.codewars.com/kata/567610d21541a88876000024

function thetaFormula(radius, arc, angle) {
    let array = [radius, arc, angle].filter(Boolean)
    console.log(array)
    if (array.length !== 3) return null
    if (array.every(item => item === '?')) return null
    if (array.every(item => typeof(item) !== 'number')) return null
    
    
    let questionMarks = array.filter(item => item === "?")
    if (questionMarks.length >1) return null
    
    
    let otherStrings = array.filter(item => typeof(item) === 'string' && item !== '?')
    if (otherStrings.length > 0) return null
    
    if (array[0] === '?') {
      return Number((arc/angle).toFixed(3))
    }
    
    if (array[1] === '?') {
      return Number((radius*angle).toFixed(3))
    }
    
    if (array[2] === '?') {
      return Number((arc/radius).toFixed(3))
    }
   
      return angle === arc / radius
  }