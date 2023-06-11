//Solution for 7 kyu Search JSON for any key value pair 
//Link to Kata: https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6/javascript


function getCharacters(obj, key, val) {
   
   obj = obj.characters
   let check = [] 
   
   obj.forEach(character => {
     if (character[key]) {
     const name = character[key] 
     if (name.toLowerCase() === val.toLowerCase()) check.push(character)   
     }
   })
   
  return check
}