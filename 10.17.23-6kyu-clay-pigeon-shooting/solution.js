//Solution for 6 kyu Clay Pigeon Shooting 
//Link to Kata: https://www.codewars.com/kata/57fa9bc99610ce206f000330

function shoot(x){
  let pete = 0 
  let phil = 0
  
  for (let i = 0; i < x.length; i++) {
    const peteScore = x[i][0].P1.split('').filter(letter => letter === "X").length
    const philScore = x[i][0].P2.split('').filter(letter => letter === "X").length
    const multiplier = x[i][1] === true ? 2 : 1
    
    pete += peteScore*multiplier
    phil += philScore*multiplier
  }
  
  
  return pete > phil ? 'Pete Wins!' : pete === phil ? 'Draw!' : 'Phil Wins!'

}
