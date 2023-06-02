//Solution for 7 kyu Composing squared strings 
//Link to Kata: https://www.codewars.com/kata/56f253dd75e340ff670002ac

function compose(s1, s2) {
    let answer = []
    s1 = s1.split("\n")          
    s2 = s2.split('\n')
    
    console.log(s1)
    console.log(s2)
    
    for (let i = 0; i < s1.length; i++) {
      const firstHalf = s1[i].slice(0,i+1)
      const secondHalf = s2[s2.length -1 - i].slice(0, s2.length -i)
      
      answer.push(firstHalf + secondHalf)
    
      
      
      
    } 
    return answer.join('\n')
  }