//Solution for 6kyu Simple Fun #79: Delete a Digit
//link to kata: https://www.codewars.com/kata/5894318275f2c75695000146



function deleteDigit(n) {
  
  let result = []
  let string = String(n)
  
  for (let i = 0; i < string.length; i ++) {
      let removed = Number(`${string.substring(0,i)}${string.substring(i +1,n.length)}`)
    
     result.push(removed)
  }
  return Math.max(...result)
}