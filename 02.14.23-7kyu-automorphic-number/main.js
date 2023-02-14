//Solution for 7kyu Automorphic Number (Special Numbers Series #6)
//Link to kata: https://www.codewars.com/kata/5a58d889880385c2f40000aa/javascript



function automorphic(n){
  let squared = n*n 

  squared = String(squared)
  n = String(n)

  let [squaredLast, nLast] = [squared.slice(-n.length)   , n]
 
  return  squaredLast === nLast ? 'Automorphic' : 'Not!!'
}