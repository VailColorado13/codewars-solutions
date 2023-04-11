//Solution for 6kyu Simple Fun #208: Find Sub Array With Same Element
//Link to Kata: https://www.codewars.com/kata/58feb7ac627d2fdadf000111/javascript


function findSubArrayWithSameElement(a, k) {
    let streaks = []
    
    for (let i = 0; i <= a.length; i++) {
      if (a[i] !== k) continue
      
      let start = i
      let end = i
      
      while (a[end + 1] === k) {
        end++
      }
      streaks.push([start, end])
    }
    
    let lengths = streaks.map(streak => streak[1] - streak[0])
    const max = Math.max(...lengths)
    
    let longest = streaks.filter(streak => (streak[1] - streak[0]) === max)
   
    
    return longest.length === 0 ? [-1, -1] : longest[longest.length -1]
  
    
  }