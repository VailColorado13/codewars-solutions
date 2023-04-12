//Solution for 6kyu TV Channels 
//Link to kata: https://www.codewars.com/kata/5836dce6966f8d1d43000007

function redarr(arr) {
    let result = {}
    
    
    let uniq = [...new Set(arr)]
    let sorted = uniq.sort()
  
   
    for (let i = 0; i < sorted.length; i++) {
      result[i] = sorted[i]
    }
  
    return result
  
}