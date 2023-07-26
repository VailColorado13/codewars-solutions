//Solution for 7 kyu Simple Fun #74: Growing Plant 
//Link to Kata: https://www.codewars.com/kata/58941fec8afa3618c9000184/solutions/javascript

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //Parameters: upspeed === the amount that the plant will grow during the day 
  //            downsped === the amount that the pland will shrink each night 
  //            desiredheight === the height that will trigger the return when reached
  
 //Returns: return the number of days needed for the plant to reach the desired height. 
  
  //Pseudocode / code: 
      //keep track of the amount of days that have elapsed 
      let days = 0
      //keep track of whether or not the condition has been met 
      let desiredHeightReached = false 
      //keep track of the height of the plant 
      let height = 0
      while (desiredHeightReached === false) {
        days++ 
        //do the mathematical operations of the plant growing and shrinking day / night
        height += upSpeed
        //plant will be at it's maximum height at the end of the day, we'll check if the condition has been met BEFORE we subtract 
        if (height >= desiredHeight) desiredHeightReached = true
        height -= downSpeed
        
       }
      
   return days
 
}