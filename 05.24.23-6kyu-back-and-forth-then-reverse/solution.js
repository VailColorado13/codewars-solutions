//Solution for 6 kyu Back and forth then Reverse! 
//Link to Kata: https://www.codewars.com/kata/60cc93db4ab0ae0026761232

 function arrange(s) {
  const t = [];
  const len = Math.floor(s.length)
  let u = s.slice()
  let counter = 0
  let start = 0 
  let end = s.length - 1 
  
  
  while (t.length < len) {
    if (counter % 2 === 0) {
      t.push(u[start])
      t.push(u[end])
    }
    else {
      t.push(u[end])
      t.push(u[start])
    }
    counter++
    start++
    end--
  }
  
   
  if (s.length % 2 !== 0) t.pop()
  
  return t.filter(elem => elem !== undefined)
}2