//Solution for 7kyu Not above the one! 
//Link to kata: https://www.codewars.com/kata/5b5097324a317afc740000fe/javascript


function binaryCleaner(arr) {
  let result = [[],[]]
  
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < 2) result[0].push(arr[i])
    if (arr[i] > 1) result[1].push(i)
    
  }
   
  return result
  
}