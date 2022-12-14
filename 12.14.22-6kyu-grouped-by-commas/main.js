//Solution for 6kyu Grouped by Commas 
//link to Kata: https://www.codewars.com/kata/5274e122fc75c0943d000148/javascript



function groupByCommas(n) {
  
    let string = String(n)
    if (string.length < 4) return string
    
    let arr = string.split('')
    let ans = []
    let counter = 0
    
    for (let i = arr.length-1; i >= 0; i--) {
      counter++
      if (counter % 3 === 0 && counter != 0 && i != 0) {
         ans.unshift(arr[i])
         ans.unshift(',')
         counter = 0
      }
      else {
        ans.unshift(arr[i])
      }   
    }
  return ans.join('')
  }