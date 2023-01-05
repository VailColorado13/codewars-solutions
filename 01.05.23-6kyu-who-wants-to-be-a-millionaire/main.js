//Solution for 6kyu who wants to be a millionaire? 
//Link to kata: https://www.codewars.com/kata/6384c9ec84c67000230a15f1/javascript



function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {

    let safeHaven1 = prizeFund.slice(0,5).reduce((pv,cv) => pv + cv,0)
    let safeHaven2 = prizeFund.slice(0,10).reduce((pv,cv) => pv + cv,0)
    let safeHaven3 = prizeFund.slice(0,15).reduce((pv,cv) => pv + cv,0)
  
  
    
    let actions = 0
    let prize = 0 
    
    for(let i = 0; i < playerActions.length; i++) {
      
      //does the player use lifelines? 
      
      if (playerActions[i].includes(`1`)) {actions++}
      if (playerActions[i].includes(`2`)) {actions++}
      if (playerActions[i].includes(`3`)) {actions++}
      
      //does the player answer correctly?
  
      if (playerActions[i].includes(correctAnswers[i])) {prize += prizeFund[i]}
      console.log(prize)
      
      //does the player walk away before the host asks a question? 
      if (playerActions[i].includes('W')) {
        console.log('walkaway')
        break
      }
      
      
      //does the player walk away after the host asks a question? 
      
       if (playerActions[i].includes('X')) {
         if ((i / 5) < 1) {
          prize = 0
          break
         } 
        if ((i / 5) < 2) {
          prize = safeHaven1
          break
        }
        if ((i/ 5) < 3) {
          prize = safeHaven2 
          break
        }
        if ((i/ 5) < 4)  {
        prize = safeHaven3
         break 
        }
      }
      
      
    //does the player answer wrong?
      else if (!playerActions[i].includes(correctAnswers[i])) {
        prize = 0
        break
      }
      
      
      
    }
    
    return [prize, actions]
    
  }