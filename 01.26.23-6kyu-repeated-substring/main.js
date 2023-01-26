//Solution for 6kyu Repeated Substring
//Link to kata: https://www.codewars.com/kata/5491689aff74b9b292000334/javascript


function f(s) {
    for (let i = 1; i <= s.length; i++) {
      let subString = s.substring(0, i)
      let repsNeeded = Math.floor(s.length / subString.length)
      
      if  (subString.repeat(repsNeeded) === s) return [subString, repsNeeded]      
    }
}

