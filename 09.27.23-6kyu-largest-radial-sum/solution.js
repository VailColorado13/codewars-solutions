//Solution for 6 kyu Largest Radial Sum 
//Link to Kata: https://www.codewars.com/kata/64edf7ab2b610b16c2067579/javascript

function largestRadialSum(arr, d) {
   const distance = arr.length / d
   
   let radials = []
   
   for (let i = 0; i < distance; i++) {
     let set = []
     for (let j = i; j < arr.length; j+=distance) {
       set.push(arr[j])
     }
     radials.push(set)
   }
   
 
  radials = radials.map(set => set.reduce((pv, cv) => pv + cv))
  return Math.max(...radials)
}