//Solution for 6kyu Fibonacci, Tribonacci and friends
//Link to kata: https://www.codewars.com/kata/556e0fccc392c527f20000c5/

function Xbonacci(signature,n){
  console.log(signature, n)
  
 const seq = signature.length
  
  while (signature.length < n) {
    const next = signature.slice(-seq).reduce((pv,cv) => pv + cv)
    signature.push(next)
    
  }
  
 return signature.slice(0,n)

}