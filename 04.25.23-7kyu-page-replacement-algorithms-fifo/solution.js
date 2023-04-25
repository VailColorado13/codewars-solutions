//Solution for 7 kyu Page replacement algorithms: FIFO 
//Link to Kata: https://www.codewars.com/kata/62d34faad32b8c002a17d6d9/javascript


function fifo(n, referenceList) {
  let result = Array(n).fill(-1),
      position = 0
  for (let i of referenceList) {
    if (!result.includes(i)) {
      result[position] = i
      position = (position + 1) % n
    }
  }
  return result
}