//Solution for 6 kyu Find the integer sequences 
//Link to Kata: https://www.codewars.com/kata/582aad136755daf91a000021

function findSequences(n){
 let matches = []
  
 for (let i = 1; i < n -1; i++) {
   let total = i
   let top = i+1
   while (total < n) {
     total += top
     if (total < n) top++
   }
   
   if (total === n) {matches.unshift([i, top])} 
 }
 
  return matches.map(spread => { 
    let range = []
    for (let i = spread[0]; i <= spread[1]; i++) {
      range.push(i)
    }
    return range
  })
  
}