//Solution for 7 kyu Max sum between two negatives 
//Link to Kata: https://www.codewars.com/kata/6066ae080168ff0032c4107a


function maxSumBetweenTwoNegatives(a) {
  
  let segments = []
  let removeLast = false
  
  if (a.filter(num => num < 0).length < 2) return -1
  
  
  
  for (let i = 0; i < a.length; i++) { 
    if (a[i] < 0) {
      let index = i + 1
      let segment = [0]
      while (a[index] >= 0) {
        if (index === a.length -1) {
          removeLast = true
          index++
          }
        else {
        segment.push(a[index]) 
        index++
        }
      }
      segments.push(segment)
    }
  }
  
  if (removeLast) {
    segments.pop()
  }
  
  
  let sums = segments.map(segment => segment.reduce((pv,cv) => pv + cv))
 
  return Math.max(...sums)
 
}