//Solution for Codewars 5kyu Not Very Secure
//link to kata: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

function alphanumeric(string){
    let letters = /[a-z]/i
    let numbers = /[0-9]/i
   
    let arr = string.split('')
    let check = arr.filter((char) => letters.test(char) || numbers.test(char))
     
    
    return check.join('') === string && string.length > 0 ? true : false
}