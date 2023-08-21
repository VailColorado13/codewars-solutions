//Solution for 6 kyu Matrix Multiplier 
//Link to Kata: https://www.codewars.com/kata/573248f48e531896770001f9

function getMatrixProduct(a, b) {

  if (b.length !== a[0].length) return null
  
  
  let scaffold = []
  
  for (let i = 0; i < a.length; i++) {
    let row = []
    
    for (let j = 0; j < b[0].length; j++) {
      row.push([i,j])
    }
  scaffold.push(row)
  }
  
  let result = []

  scaffold.forEach(column => {
    let newColumn = []
    
    for (let i = 0; i < column.length; i++) {
        const rowFromA = a[column[i][0]]
        const columnFromB = b.map(rows => rows[column[i][1]])
        let sum = 0
        for (let i = 0; i < rowFromA.length; i++) {
          sum += rowFromA[i]*columnFromB[i]
        }
        newColumn.push(sum)
    }
  
    result.push(newColumn)
  
  })
  
  return result

}