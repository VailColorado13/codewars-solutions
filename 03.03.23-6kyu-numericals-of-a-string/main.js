//Solution for 6kyu Numericals of a String
//Link to kata: https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/solutions/javascript

function numericals(s){
  
  let resultStr = ''
  let counts = {}
  const arr = s.split('')
  
  for (let i = 0; i < arr.length; i++) {
    if (!counts[arr[i]]) counts[arr[i]] = 1
    else counts[arr[i]]++
    
    resultStr += counts[arr[i]]
  }
  
  return resultStr
 
}