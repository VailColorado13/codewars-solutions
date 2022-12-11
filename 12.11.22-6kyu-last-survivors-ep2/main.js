//Solution to 6kyu Last Survivors ep.2
//Link to Kata: https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/javascript

function lastSurvivors(str) {
    let cl = console.log
    cl('one run')
    let arr = str.split('')
    let res = []
  
    let counts = arr.reduce((obj,count) => {
      if (!obj[count]) obj[count] =1
      else obj[count]++
      return obj
    },{})
  
    let countsArr = Object.entries(counts)
  
    for (let i = 0; i < countsArr.length; i++) {
      
  
      if (countsArr[i][1] > 1) {
        if (countsArr[i][0] === 'z') {
          res.push('a'.repeat(countsArr[i][1] / 2))
          res.push('z'.repeat(countsArr[i][1] % 2))
        }
        else {
        res.push(String.fromCharCode(countsArr[i][0].charCodeAt(0) + 1).repeat(countsArr[i][1] / 2))
        res.push(countsArr[i][0].repeat(countsArr[i][1] % 2))
        }
      }
      else {res.push(countsArr[i][0])}
  
    }
    let regex = /(.)\1{1,}/g
    let newStr = res.sort().join('')
  
    if (regex.test(newStr)) {
      return lastSurvivors(newStr);
    }
    else {
      return newStr;
    }
  }