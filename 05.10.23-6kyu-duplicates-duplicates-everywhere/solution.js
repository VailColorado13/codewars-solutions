//Solution for 6 kyu Duplicates. Duplicates Everywhere. 
//Link to Kata: https://www.codewars.com/kata/5e8dd197c122f6001a8637ca


const removeDuplicateIds = (obj) => {
   let values = Object.values(obj)
   let keys = Object.keys(obj)
  
  
  let seen = new Set()
  let cleanedData = []

  
  for (let i = values.length -1; i >= 0; i--) {
    let cleanedArr = []
    for (let j = 0; j < values[i].length; j++) {
      if (!seen.has(values[i][j])) {
        seen.add(values[i][j])
        cleanedArr.push(values[i][j])
      } else continue
    }
    cleanedData.unshift(cleanedArr)
  }
  
  
  
  let result = {}
  
  for (let i = 0; i < cleanedData.length; i++) {
    result[keys[i]] = cleanedData[i]
  }

  
  return result

}