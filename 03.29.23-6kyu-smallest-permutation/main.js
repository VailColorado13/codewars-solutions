//solution for 6kyu smallest permutation
//link to kata: https://www.codewars.com/kata/5fefee21b64cc2000dbfa875


function minPermutation(n) {
  const negative = n < 0 ? true : false 
  
  n = negative ? 
    String(n).substring(1).split('').map(str => Number(str)) : 
    String(n).split('').map(str => Number(str))
  
  n = n.sort((a,b) => a - b)
  
  let smallestNonZero 
  
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== 0) {
      smallestNonZero = n[i]
      n.splice(i,1)
      break
    }
  }
  
  n.unshift(smallestNonZero)
  
  return negative ? Number(n.join('')) * -1 : Number(n.join(''))
}