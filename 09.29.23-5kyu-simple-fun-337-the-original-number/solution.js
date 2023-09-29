//Solution for 5 kyu Simple Fun #337: The Original Number 
//Link to Kata: https://www.codewars.com/kata/5959b637030042889500001d/javascript


function originalNumber(s) {
    const NUMS = {
      'ZERO': '0', 'EIGHT': '8', 'SIX': '6', 'SEVEN': '7',
      'THREE': '3', 'FOUR': '4', 'FIVE': '5', 'NINE': '9',
      'TWO': '2', 'ONE': '1'
    };
  
    const KEYS = ['ZERO', 'EIGHT', 'SIX', 'SEVEN',
      'THREE', 'FOUR', 'FIVE', 'NINE',
      'TWO', 'ONE'];
  
    let res = '';
    const counted = {};
  
    // Count the occurrences of each character in the input string
    for (const char of s) {
      counted[char] = (counted[char] || 0) + 1;
    }
    
  
   for (const key of KEYS) {
    while (key.split('').every(char => counted[char] > 0)) {
      for (const char of key) {
        counted[char] -= 1;
      }
      res += NUMS[key];
    }
  }
  
    // Convert the result into a sorted string
    return res.split('').sort().join('');
  }