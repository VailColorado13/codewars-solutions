//Solution for 6kyu Tribonacci Sequence
//Link to kata: https://www.codewars.com/kata/556deca17c58da83c00002db


function tribonacci(signature,n){
 
  if (n <= 3) return signature.slice(0, n)
  
  while (signature.length !== n) {
    
   const temp = signature.slice(signature.length -3, signature.length)
   console.log(temp)
   signature.push(temp.reduce((pv,cv) => pv+cv))
   
  }
  
  return signature
  
}