//Solution for 6 kyu Simple Fun #15: Addition without Carrying 
//Link to Kata: https://www.codewars.com/kata/588468f3b3d02cf67b0005cd/javascript

function additionWithoutCarrying(a,b) {
    a = String(a).split('').map(str => Number(str))
    b = String(b).split('').map(str => Number(str))
  
    const difference = Math.abs(a.length - b.length)
    let set = [a,b].sort((a, b => a.length - b.length))
   
    
    while (set[0].length > set[1].length) {
      set[1].unshift(0)
    }

  let answer = ''
  for (let i = 0; i < set[0].length; i++) {
    let next = set[0][i] + set[1][i]
    if (next >= 10) next = next - 10
    answer += String(next)
  }
  return Number(answer)
}