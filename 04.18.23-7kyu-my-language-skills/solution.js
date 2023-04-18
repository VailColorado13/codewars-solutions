//Solution for 7 kyu My Language Skills 
//Link to Kata: https://www.codewars.com/kata/5b16490986b6d336c900007d

function myLanguages(results) {
    let array = Object.entries(results)
    let sorted = array.sort((a, b) => b[1] - a[1])
    
    return sorted.filter(([language, score]) => score >= 60).map(([language, score]) => language)
  }