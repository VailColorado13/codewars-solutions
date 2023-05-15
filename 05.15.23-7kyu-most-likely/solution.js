//Solution for 7 kyu Most Likely 
//Link to Kata: https://www.codewars.com/kata/56644a421b7c94c622000056/javascript

function mostLikely(prob1,prob2){
  prob1 = prob1.split(':').map(str => Number(str))
  prob2 = prob2.split(':').map(str => Number(str))
  
  let one = prob1[0] / prob1[1]
  let two = prob2[0] / prob2[1]
  
  
  return one > two 
}