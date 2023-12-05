//Solution for 6 kyu Madhav array 
//Link to Kata: https://www.codewars.com/kata/59b0492f7d3c9d7d4a0000bd

function isMadhavArray(arr){
  if (arr.length < 2) return false
  let check = arr[0]
  let shiftBy = 1
  
  while (arr.length) {
    let temp = 0 
    for (let i = 0; i < shiftBy; i++) {
      temp += arr.shift()
    }
    if (temp !== check) return false
    shiftBy++
  }
  
  return true
}