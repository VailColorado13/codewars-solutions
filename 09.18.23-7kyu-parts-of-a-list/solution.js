//Solution for 7 kyu Parts of a list 
//Link to Kata: https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
    let answers = []
    
    for (let i = 0; i < arr.length - 1; i++) {
       let first = arr.slice(0, i +1).join(' ')
       let second = arr.slice(i+1).join(' ')
       answers.push([first, second])
    }
  
    return answers
  }