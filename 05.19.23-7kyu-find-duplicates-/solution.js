//Solution for 7 kyu Find Duplicates  
//Link to Kata:  https://www.codewars.com/kata/5558cc216a7a231ac9000022/javascript

function duplicates(arr) {

    let seen = []
    let duplicates = []
    
    for(let i = 0; i < arr.length; i++) {
      if (seen.includes(arr[i]) && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i])
      }
      seen.push(arr[i])
    }
    
    return duplicates
    
  }