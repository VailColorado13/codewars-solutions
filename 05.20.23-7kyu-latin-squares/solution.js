//Solution for 7 kyu Latin Squares 
//Link to Kata: https://www.codewars.com/kata/645fb55ecf8c290031b779ef/javascript

function makeLatinSquare(n) {
 
  if (n === 1) return [[1]]
  
  let firstRow = []
  
  for (let i = 1; i <= n; i++) {firstRow.push(i)}
  
  let answer = [firstRow]
  let counter = 2
  
  
  while (counter < n) {
  let newArray = []
      for (let j = 1; j <= n; j++) {
        const newIndex = (j + answer.length) % firstRow.length
        newArray.push(firstRow[newIndex])
      }
  answer.push(newArray)
  counter++
  }
  
  let lastRow = []
  
  for (let i = 0; i < n; i++) {
    const newIndex = (i + 1) % firstRow.length
    
    lastRow.push(firstRow[newIndex])
    
  }
  answer.push(lastRow)
  
  return answer
  
}