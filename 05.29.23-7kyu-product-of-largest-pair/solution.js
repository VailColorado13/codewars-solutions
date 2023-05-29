//Solution for 7 kyu Product of Largest Pair 
//Link to Kata: https://www.codewars.com/kata/5784c89be5553370e000061b/javascript

function maxProduct(a) {
    let maxOne = 0
    let indexOfMaxOne = 0
    let maxTwo = 0
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] > maxOne) {
        maxOne = a[i]
        indexOfMaxOne = i
      }
    }
    
    for (let i = 0; i < a.length; i++) {
      if (i !== indexOfMaxOne && a[i] > maxTwo) {
        maxTwo = a[i]
      }
    }
    
    return maxOne*maxTwo

}