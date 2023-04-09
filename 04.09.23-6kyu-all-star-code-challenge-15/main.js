//solution for 6kyu all star code challenge #15
//link to kata: https://www.codewars.com/kata/586560a639c5ab3a260000f3

function rotate(str){

  let result = [str]
  
  for (let i = 0; i < str.length - 1; i++) {
    let last = result[0].split('')
    let rot = last.pop()
    let next = rot + last.join('') 
   result.unshift(next)
  }
  
  return result.filter(Boolean)
}