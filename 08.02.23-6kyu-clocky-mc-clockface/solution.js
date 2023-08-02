//Solution for 6 kyu Clocky Mc Clock-Face 
//Link to Kata: https://www.codewars.com/kata/59752e1f064d1261cb0000ec


var whatTimeIsIt = function(angle) {
    //1 hour = 30 degrees 
    let hours = Math.floor(angle / 30)
    hours = hours === 0 ? '12' : String(hours).padStart(2, 0)
    
    //determine how many hours have past by dividing angle by h
    //1 minute = .5 degrees 
    //round down to nearest minute 
  
    let minutes = Math.floor((angle % 30)*2)
    minutes = String(minutes).padStart(2,0)
    
    //return a string that is in the format HH:MM
    return `${hours}:${minutes}`
  }