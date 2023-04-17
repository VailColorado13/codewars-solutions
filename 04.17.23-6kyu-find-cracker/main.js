//Solution for 6kyu find cracker
//link to kata: https://www.codewars.com/kata/59f70440bee845599c000085/javascript


function findHack(arr) {
    console.log(arr)
    let hackers = []
    
   let test = arr.map(([name, reportedScore, grades]) => {
      let expected = expectedScore(grades) > 200 ? 200 : expectedScore(grades)
      return [name, reportedScore, expected]
    })
    
    test.forEach(([name, reportedScore, expected]) => {
      if (reportedScore > 200) hackers.push(name)
      else if (reportedScore !== expected) hackers.push(name)
    })
    
    return hackers
  
  }
  
  function fiveAboveB (scores) {
    if (scores.length >= 5 && scores.every(score => score === 'A' || score === 'B')) {
      return true
    }
    else return false
  }
  
  
  function expectedScore(scores) {
  
    const points = {"A": 30,"B": 20,"C": 10,"D": 5}
    let total = 0
    
    if (fiveAboveB(scores)) total += 20
    
    scores.forEach(score => {
      if (!points[score]) total += 0
      else total += points[score]
    })
    return total 
  }