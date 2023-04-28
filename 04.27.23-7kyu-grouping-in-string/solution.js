//Solution for 7 kyu Grouping in string 
//Link to Kata: https://www.codewars.com/kata/5ee8ba31b44cc30032cbce04/javascript

const isConsecutive = (str) => {

   let check = str.split('').reduce((obj, item) => { 
     if (!obj[item]) obj[item] = false
     return obj  
   },{})
   
   str = str.split('')
  
   while (str.length) {
     const first = str.shift()
     
     while (str[0] === first) {
       str.shift()
     }
     
     if (check[first] === true) return false
     else check[first] = true
   }
  return true 
}