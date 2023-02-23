//Solution for 7kyu averages of numbers
//Link to kata: https://www.codewars.com/kata/57d2807295497e652b000139/javascript


function averages(numbers) {
  if (!numbers) return []
  
  if (numbers.length <= 1) return []
  
  let averages = []

  for (let i = 0; i < numbers.length -1; i++) {
    
    let sum = numbers[i] + numbers[i+1]    
    averages.push(sum/2)  
  }
  
  return averages

}