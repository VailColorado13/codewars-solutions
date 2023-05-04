//Solution for 5 kyu Closest and Smallest 
//Link to Kata: https://www.codewars.com/kata/5868b2de442e3fb2bb000119/javascript

function  closest(string) {
  if (string.length === 0) return []
  
 let arr = string.split(' ')
 
 let weights = arr.map(num => {
   let digits = num.split('').map(dig => Number(dig))
   return digits.reduce((pv, cv) => pv + cv)
 })  
 
 

  let allPairs = []  
  
  for (let i = 0; i < weights.length; i++) {
    const check = [weights[i] , i, Number(arr[i])]
    for (let j = 0; j < weights.length; j++) {
     if (i === j) continue
     const test = [weights[j] , j, Number(arr[j])]
      allPairs.push([check, test])   
     }  
  }
  
  let minDistance = Math.min(...allPairs.map(pair => Math.abs(pair[0][0] - pair[1][0])))
  let closestPairs = allPairs.filter(pair => (Math.abs(pair[0][0] - pair[1][0]) === minDistance))
  
  let smallestWeight = Math.min(...closestPairs.map(pair => pair[0][0] + pair[1][0]))
  let smallestLightest = closestPairs.filter(pair => (pair[0][0] + pair[1][0]) === smallestWeight)
  
  let reso = smallestLightest[0]
  
  if (reso[0][0] !== reso[1][0]) {
    return reso.sort((a,b) => a[0] - b[0])
  } 
  
  else return reso
}