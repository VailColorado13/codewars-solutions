//Solution for 6kyu longest_palindrome
//link to kata: https://www.codewars.com/kata/54bb6f887e5a80180900046b

longestPalindrome=function(s){
    if (s.length < 1) return 0
    
    
    let longest = 0 
    
    for (let i = 0; i < s.length; i++) {
      let oddPalindrome = expandFromCenter(s, i, i)
      let evenPalindrome = expandFromCenter(s, i-1, i)
      
      longest = Math.max(longest, oddPalindrome, evenPalindrome)
    }
    
    
    
    function expandFromCenter(string, left, right) {
      
      while (string[left] && string[right] && string[left] === string[right]) {
        left = left - 1
        right = right + 1
      }
      
      return right - left - 1
      
    }
    
    return longest
    
  }