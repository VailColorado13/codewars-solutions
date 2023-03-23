//Solution for 7kyu Two fighters, one winner. 
//Link to kata: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/javascript


function declareWinner(fighter1, fighter2, firstAttacker) {
  
  const newAttacker = fighter1.name === firstAttacker ? fighter2.name : fighter1.name
 
  if (fighter1.name === firstAttacker) {
    fighter2.health = fighter2.health - fighter1.damagePerAttack
  }
  
  
   if (fighter2.name === firstAttacker) {
    fighter1.health = fighter1.health - fighter2.damagePerAttack
  }
  
  if (fighter1.health <= 0) return fighter2.name
  if (fighter2.health <= 0) return fighter1.name
  
  else return declareWinner(fighter1, fighter2, newAttacker)

}