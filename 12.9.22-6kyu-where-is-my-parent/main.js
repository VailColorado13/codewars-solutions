//Solution for 6kyu Where is my Parent!?(cry)
//link to Kata: https://www.codewars.com/kata/58539230879867a8cd00011c


//Parameters: a string containing an unknown number of unique uppercase letters, and an unknown number of
//matching lowercase letters. 

//Result: output will be a string, with each set of letters matched up in an alphabetical sequence. 
//Each first new letter will be capitalized. 

//Example: "CbcBcbaA" => 'AaBbbCcc'

//Pseudocode: 
  //create a new variable called sortedLC that sorts all the letters alphabetically and converts 
  //them all th lowercase.

  //loop through that array backwards. If i != i-1 unshift to res array

  //join array. Capitalize firts letter, return.




function findChildren(dancingBrigade) {
  let sortedLC = dancingBrigade.toLowerCase().split('').sort()
  let res = []
   
  for (let i = sortedLC.length -1; i > 0; i--) {
    if (sortedLC[i] != sortedLC[i-1]) {res.unshift(sortedLC[i].toUpperCase())}
    else res.unshift(sortedLC[i])
  }
  
  return `${sortedLC[0].toUpperCase()}${res.join('')}`

}