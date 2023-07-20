//Solution for 7 kyu Vampire Numbers 
//Link to Kata: https://www.codewars.com/kata/54d418bd099d650fa000032d

function vampireTest(a, b) {
   let product = String(a*b)
    .split('')
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('')

   let check = (String(a) + String(b))
    .split('')
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join('')
   
   
   console.log(product, check)
   return product === check 

}