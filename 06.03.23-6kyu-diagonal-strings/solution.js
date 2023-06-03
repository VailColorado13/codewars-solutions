//Solution for 6 kyu Diagonal Strings 
//Link to Kata: https://www.codewars.com/kata/5c6d80d7ff00de2dcc4d4188

 function diagonalsOfSquare(array) {
  
  console.log(array)
  
  if (array.length === 0) return null
  if (!array.every(str => str.length === array.length)) return null
  let arrayPlus = []
  
  for (let i = 0; i < array.length; i++) {
    arrayPlus.push([ array[i] , i]) 
  }
  
arrayPlus = arrayPlus.sort((a, b) => a[0].localeCompare(b[0]));
  
  
  let answer = []
  
  while (answer.length < arrayPlus.length) {
    arrayPlus.push(arrayPlus.shift())
    let indexChecker 
    let string = ''
    let counter = 0
    for (let i = 0; i < arrayPlus.length; i++) {
      if (i === 0) {indexChecker = arrayPlus[i][1]}
      string += arrayPlus[i][0][counter]
      counter++
    }
    answer.push([string, indexChecker])
   }
  
  answer = answer.sort((a, b) => a[1] - b[1])
   
  return answer.map(array => array[0])
  
  
  
}
