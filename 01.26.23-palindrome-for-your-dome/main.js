//Solution for 6kyu Palindrome for Your Dome
//Link to Kata: https://www.codewars.com/kata/53046ceefe87e4905e00072a



function palindrome(string) {

    let test = string.toLowerCase().split('')
   
    test = test.filter(char => char.match(/[a-z0-9]/))
    
    let copy = []
    
    for (let i = test.length -1; i >= 0; i--) {
      copy.push(test[i])
    }
  
   return test.join('') === copy.join('') ? true : false
    
}