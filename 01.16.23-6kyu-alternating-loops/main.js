//Solution for 6kyu Alternating Loops
//Link to Kata: https://www.codewars.com/kata/55e529bf6c6497394a0000b5


function combine() {
 let array = Object.values(arguments)
  console.log(array)
  
  let answer = []
  
  while (array.some((element) => element.length)) {
    for (let i = 0; i < array.length; i++) {
        answer.push(array[i].shift())
    }   
  }
  return answer.filter(Boolean)
  
}