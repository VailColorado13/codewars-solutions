//Solution for 6 kyu Simple Fun #305: Typist 
//Link to Kata: https://www.codewars.com/kata/592645498270ccd7950000b4/solutions/javascript

function typist(s){
  //need some way to count the number of times that we change case 
  let changedCase = 0
  //initialize another variable to keep track of the state of the caps lock button 
  let capsLockOn = false 
  
  
  for (let i = 0; i < s.length; i++) {
    //create a temporary variable 'check' that is what we'd expect the next letter to be given the state of the caps lock button 
    let check = capsLockOn ? s[i].toUpperCase() : s[i].toLowerCase() 
    //does the actual letter match the expected letter? If not... 
    if (s[i] !== check) {
      // add one to the count of times we changed case 
       changedCase++ 
      //se the state of capsLockOn to the opposite of what ever it was before we reached this index 
       capsLockOn = !capsLockOn 
    }
  }
  //return the length of the string plus the number of times the capslock button was pressed 
   return s.length + changedCase 
}