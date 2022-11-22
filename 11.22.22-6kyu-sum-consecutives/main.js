//Solution for Codewars 6kyu Sum Consecutives
//link to kata: https://www.codewars.com/kata/55eeddff3f64c954c2000059

function sumConsecutives(s) {

    let spaces = []
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[i+ 1]) {
        spaces.push(s[i])
        spaces.push('&')
      }
      else {spaces.push(s[i])}
    }
    
    let consecs = spaces.join(',').split('&').filter(Boolean)
    
    let deepArr = consecs.map((x) => x.split(',').filter(Boolean))
    let deepArrNums = deepArr.map((array) => array.map((number) => Number(number))) 
  
  
    return deepArrNums.map((arr) => arr.reduce((pv,cv) => pv + cv, 0))
  
  }