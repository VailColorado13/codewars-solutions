//Solution for 6kyu Count the Smiley faces
//Link to kata: https://www.codewars.com/kata/583203e6eb35d7980400002a


function countSmileys(arr) {
    arr = arr.map(text => text.trim())
  
    let colonsFirst = arr.filter((text) => text.charAt(0) === ':' || text.charAt(0) === ';')
    let threeChars = colonsFirst
      .filter((text) => text.length === 3)
      .filter((text) => text.charAt(1) === "-" || text.charAt(1) === "~")
      .filter((text) => text.charAt(2) === ")" || text.charAt(2) ==="D")
    
    let twoChars = colonsFirst
      .filter((text) => text.length === 2)
      .filter((text) => text.charAt(1) === ")" ||  text.charAt(1) ==="D")
    
    
   
    
    return threeChars.length + twoChars.length
    
  }