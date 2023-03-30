//solution for 7kyu tricky doubles
//link to kata: https://www.codewars.com/kata/56971747aa359bdbf800004d

function trickyDoubles(n){
 
  let string = String(n)
  let first = string.substring(0, string.length /2)
  let second = string.substring(string.length /2)
  
 return first === second ? n : n*2
  
}

