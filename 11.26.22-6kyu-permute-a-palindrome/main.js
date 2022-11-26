//Solution for 6kyu Permute a Palindrome 
//link to kata: https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/solutions/javascript


function permuteAPalindrome (input) { 
    console.log(input.length)
    let arr = input.split('')
    const counts = arr.reduce((obj, item) => {
      if (!obj[item]) obj[item] = 1
      else obj[item]++
      return obj
    },{})
    
    const countsArr = Object.values(counts)
    
    let evens = countsArr.filter(x => x % 2 === 0)
    let odds = countsArr.filter(x => x % 2 !== 0)
    let oddsSum = odds.reduce((pv,cv) => pv + cv,0)
    console.log(odds)
    console.log(oddsSum)
    
    
    if (input.length % 2 === 0 && oddsSum === 0) {return true}
    if (input.length % 2 !== 0 && oddsSum === 1) {return true}
    if (input.length % 2 !== 0 && oddsSum === 1) {return true}
    if (input.length % 2 !== 0 && oddsSum % 2 !== 0 && odds.length === 1) {return true} 
    
    else{return false}
    

  }