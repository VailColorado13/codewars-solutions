//Solution for 6kyu zipWith
//link to kata: https://www.codewars.com/kata/5825792ada030e9601000782/javascript


function zipWith(fn,a0,a1) {
  let response = [];
  for (let i=0; i<Math.min(a0.length, a1.length); i++) response.push(fn(a0[i],a1[i]));
  return response;
}