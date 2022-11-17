//Codewars 6kyu - Bouncing Balls

//link to kata: //www.codewars.com/kata/5544c7a5cb454edb3c000047/solutions/javascript?filter=me&sort=best_practice&invalids=false

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.


//-----------------------------------------------------------------------------------------------\\

function bouncingBall(h,  bounce,  window) {
    let count = 0
    let exponent = 1
    
    //in order for our loop to progressivly return a smaller and smaller bounced height, 
    // we'll use an exponent to incrementally increase the amount of decay in height 
    //as it bounces more and more times
    
    let newHeight = h  //this variable will be used within the loop and allows us to keep h constant
    
    if (bounce >= 1 || bounce <= 0) {return -1} //control for edge cases


    else{
    while (newHeight > window) {  
      newHeight = h*(bounce**exponent)
      count+=2
      exponent++
    }
  
      
    
    return count - 1  
    //we need to remove 1 here, because our for loop counts each pass twice (falling and bouncing), but on the last pass the mother would only see it pass once when it bounces, she would not see it again when it falls
  }}