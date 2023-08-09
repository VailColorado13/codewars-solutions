//Solution for 7 kyu The mean of two means 
//Link to Kata: https://www.codewars.com/kata/583df40bf30065fa9900010c

function getMean(arr, x, y) {
  
    if (x <= 1 || y <=1) return -1
    if (x > arr.length || y > arr.length) return -1
    
    let firstX = (arr.slice(0,x).reduce((pv, cv) => pv + cv)) / x
    let lastY = (arr.slice(arr.length - y).reduce((pv, cv) => pv + cv))/y
    
    return (firstX + lastY) /2 
    
}