//Solution for 6 kyu String tops 
//Link to Kata: https://www.codewars.com/kata/59b7571bbf10a48c75000070


function tops(msg) {
  let str = ''
  let lastIndex = [0]
  
  while (lastIndex[lastIndex.length -1] < msg.length) {
    let nextIndex = lastIndex[lastIndex.length -1] + 1 + 4*str.length 
     if (msg[nextIndex] !== undefined) {str += msg[nextIndex]}
    lastIndex.push(nextIndex)
  }

  return str.split('').reverse().join('')
  
}