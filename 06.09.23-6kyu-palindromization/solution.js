//Solution for 6 kyu Palindromization 
//Link to Kata: https://www.codewars.com/kata/5840107b6fcbf56d2000010b/javascript


function palindromization(element, n){
  if (element.length === 0 || n < 2) return 'Error!' 
  
  let leftSide = []
  let rightSide = []
  let index = 0
  while (leftSide.length + rightSide.length < n) {
    let nextElement = element[index % element.length]
    leftSide.push(nextElement)
    rightSide.unshift(nextElement)
    index++
  }
  
  if (n % 2 === 1) {rightSide.shift()}
  
  return leftSide.concat(rightSide).join('')
}