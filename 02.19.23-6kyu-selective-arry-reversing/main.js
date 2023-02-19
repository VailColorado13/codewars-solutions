//Solution for 6kyu Selective Array Reversing
//link to kata: https://www.codewars.com/kata/58f6000bc0ec6451960000fd/javascript

function selReverse(array, length) {
    if (length >= array.length) return array.reverse()
    if (length === 0) return array
   
   let resContainer = []
   
 
   for (let i = 0; i < array.length; i+=length) {
     
     let slice = array.slice(i, i+ length)
     
     resContainer.push(slice)
   
   }
   
   let reversed = resContainer.map(slice => slice.reverse())
  
   let result = []
   
   
   reversed.forEach(array => {
     for (let i = 0; i < array.length; i++) {
       result.push(array[i])
     }
   })
   
   return result
   
   
 }