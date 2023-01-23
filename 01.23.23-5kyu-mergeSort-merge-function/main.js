//Solution for 5kyu mergeSort 'merge' function
//Link to kata: https://www.codewars.com/kata/52336a4436e0b095d8000093

function mergesorted(a, b) {
    let result = []
     while (a.length && b.length) {
       if (a[0] <= b[0]) result.push(a.shift())
       else result.push(b.shift())
     }
     
     while (a.length) {
       result.push(a.shift())
     }
     
      while (b.length) {
       result.push(b.shift())
     }
     
     
     return result
}