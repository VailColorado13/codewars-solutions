//Solution for 7 kyu Alphabetically ordered  
//Link to Kata: https://www.codewars.com/kata/5a8059b1fd577709860000f6/javascript

function alphabetic(s) {
    let alpha = s.split('').sort().join('')
    return s === alpha
     
   }
