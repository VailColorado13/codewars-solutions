//Solution for 7kyu Help the Fruit Guy
//Link to kata: https://www.codewars.com/kata/557af4c6169ac832300000ba/javascript

function removeRotten(bagOfFruits){
  if (!bagOfFruits) return []
  
  for (let i = 0; i < bagOfFruits.length; i++) {
    if (bagOfFruits[i].substring(0,6) === 'rotten') {
      let temp = bagOfFruits[i].substring(6).toLowerCase()
      bagOfFruits[i] = temp
    }
  }
  return bagOfFruits
}