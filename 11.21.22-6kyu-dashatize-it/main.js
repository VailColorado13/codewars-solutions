//Solution for 6kyu Dashatize it
//link to kata: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
 


function dashatize(num) {
  if (num < 0) {num = num * -1}
  if (isNaN(num)) {return 'NaN'}
  
  
  let arr = String(num).split('').map((x) => Number(x))
  let resArr = []
  arr.forEach((number) => {
    if (number % 2) {
      resArr.push('-')
      resArr.push(number)
      resArr.push('-')
    }
    else {resArr.push(number)}
    
  })
  
      if (resArr[0] === '-') {resArr.shift()}
      if (resArr[resArr.length -1] === '-') {resArr.pop()}
    
  for (let i = 0; i <= resArr.length; i++) {
    if (resArr[i] === '-' && resArr[i+1] === '-') {resArr.splice(i,1)}
   }
     return resArr.join('')  
}