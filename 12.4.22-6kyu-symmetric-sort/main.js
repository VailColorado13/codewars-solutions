//Solution for 6kyu Symmetric Sort
//link to Kata: https://www.codewars.com/kata/5705aeb041e5befba20010ba/javascript

function sc(array){
    let ascendingSort = array.sort((a,b) => a - b)
    
    let fragOne = []
    let fragTwo = []  
    
    for (let i = 0; i < Math.floor(ascendingSort.length); i++) {
      if (i % 2 === 0) fragOne.push(ascendingSort[i])
      else fragTwo.push(ascendingSort[i])
    }
    return fragOne.concat(fragTwo.reverse())
    
}