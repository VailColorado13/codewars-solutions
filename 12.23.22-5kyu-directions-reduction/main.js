//Solution to 5kyu directions reduction 
//Link to Kata: https://www.codewars.com/kata/550f22f4d758534c1100025a/solutions/javascript


function dirReduc(arr){
  let directions = ['NORTH', 'SOUTH', 'EAST', 'WEST']
  let opposites = ['SOUTH', 'NORTH', 'WEST', 'EAST']
  
  let reduction = ['.']
  
  for (let i = 0; i < arr.length; i++) { 
    if (directions.indexOf(arr[i]) !== opposites.indexOf(reduction[reduction.length -1]))  {reduction.push(arr[i])}
    else (reduction.pop())     
  }  
return reduction.slice(1)  
}