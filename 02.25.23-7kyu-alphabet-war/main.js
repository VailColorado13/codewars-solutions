//Solution for 7kyu alphabet war 
//link to kata: https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript



function alphabetWar(fight){

  
  const leftSide = "_sbpw"
  const rightSide = "_zdqm"
  
  let tallyLeft = 0 
  let tallyRight = 0 
  
  for (let i = 0; i < fight.length; i++) {
    if (leftSide.search(fight[i]) >= 0) {
      tallyLeft+= leftSide.search(fight[i])
    }
  }
  
    
for (let i = 0; i < fight.length; i++) {
    if (rightSide.search(fight[i]) >= 0) {
      tallyRight+= rightSide.search(fight[i])
    }
  }
  
  return tallyRight > tallyLeft ? "Right side wins!" : tallyLeft > tallyRight ? "Left side wins!" :  "Let's fight again!" 
  
}