//Solution for 6kyu Greatest Position Distance Between Matching Array Values
//Link to Kata: https://www.codewars.com/kata/5442e4fc7fc447653a0000d5


var greatestDistance = function(data) {
    let itemIndeces = {}
    
    for(let i = 0; i < data.length; i++) {
      if (!itemIndeces[data[i]]) itemIndeces[data[i]] = [i]
      else itemIndeces[data[i]].push(i)
    }
    
   let indexArr = Object.values(itemIndeces).filter(arr => arr.length > 1)
    if (indexArr.length === 0) return 0 
    
    let maxDifferences = indexArr.map(arr => arr[arr.length -1] - arr[0])
   
    return Math.max(...maxDifferences)
  }