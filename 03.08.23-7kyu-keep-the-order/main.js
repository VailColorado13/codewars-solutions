//Solution for 7kyu Keep the Order 
//Link to kata: https://www.codewars.com/kata/582aafca2d44a4a4560000e7/javascript



function keepOrder(arr, val) {
    let i = 0 
    
    while(arr[i] < val) {
      i++
    }
  
    return i
  }