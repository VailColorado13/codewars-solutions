//Solution for 6kyu Meeting 
//link to kata: https://www.codewars.com/kata/59df2f8f08c6cec835000012/javascript



function meeting(s) {
  
  let arr = s.toUpperCase()
    .split(';')
    .map(fullName => fullName.split(':'))
    .map(fullName => fullName.reverse())
    .sort()
  
  
  let res = ''
  
  
  for (let i = 0; i < arr.length; i++) {
    res += `(${arr[i].join(', ')})`
  }
  
  return res  

}