//Solution for 7kyu Comfortable Words 
//Link to kata: https://www.codewars.com/kata/56684677dc75e3de2500002b/javascript

const comfortableWord = word => {
    const letterPositions = {
    "q": "Left", "w": "Left", "e": "Left", "r": "Left", "t": "Left",
    "a": "Left", "s": "Left", "d": "Left", "f": "Left", "g": "Left",
    "z": "Left", "x": "Left", "c": "Left", "v": "Left", "b": "Left",
    "y": "Right", "u": "Right", "i": "Right", "o": "Right", "p": "Right",
    "h": "Right", "j": "Right", "k": "Right", "l": "Right", "n": "Right",
    "m": "Right"
  }
    let lastPos = ''
    
   for (let i = 0; i < word.length; i++) {
     const thisPos = letterPositions[word[i]]
     if (thisPos === lastPos) return false
     else lastPos = thisPos
     
   }
    return true
  };