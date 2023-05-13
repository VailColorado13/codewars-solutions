//Solution for 6 kyu Count Repeats 
//Link to Kata: https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

function countRepeats(str) {

    let spaces = ''
    
    for(let i = 0; i < str.length; i++) {
      if (str[i] !== str[i+ 1]) {
        spaces += str[i]
        spaces += ' '
      } else spaces += str[i]
    }
    
    spaces = spaces.split(' ').filter(Boolean)
  
    let counts = spaces.map(str => str.length -1)
    
    return counts.reduce((pv, cv) => pv + cv)
    
  }