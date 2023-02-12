//Solution for 7kyu Alphabetical Grid
//Link to kata: https://www.codewars.com/kata/60a94f1443f8730025d1744b/javascript



function grid(N) {
  
    if (N < 0) return null
    if (N === 0) return '' 
    
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    let array = []
    
    for (let i = 1; i <= N; i++) {
      let row = []
      for (let j = 0; j < N; j++) {
        row.push(alpha.charAt((i + j -1) % 26))
      }
      array.push(row.join(' '))
    }

   return array.join('\n')

  }