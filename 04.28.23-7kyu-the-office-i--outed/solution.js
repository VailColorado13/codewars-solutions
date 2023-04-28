//Solution for 7 kyu The Office I - Outed 
//Link to Kata: https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1


function outed(meet, boss){

  meet[boss] = meet[boss] * 2
  
  let scores = Object.values(meet).reduce((pv, cv) => pv + cv)
  let totalPeople = Object.values(meet).length
  
  return scores/totalPeople <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'

}