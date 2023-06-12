//Solution for 6 kyu Jumping down the staircase 
//Link to Kata: https://www.codewars.com/kata/647d08a2c736e3777c9ae1db/javascript

const getNumberOfWays = (steps, maxJumpLength) => {
    // This array represents the number of ways the frog can reach each step from the top.
    // Initially, it is filled with zeros, but as the algorithm progresses, we will replace those zeros with other integers.
    const numberOfWays = Array(steps + 1).fill(BigInt(0));
  
    // Base case: The frog is already at the top (step 0).
    // If we are at the top, there is nowhere to jump from, and the only way to reach the top from the top is to simply stay in place.
    // Hence, we set the number of ways at the top to 1.
    numberOfWays[0] = BigInt(1);
  
    // Now, we will simulate the frog jumping from each step, starting from the top and going downwards.
    for (let currentStep = 1; currentStep < numberOfWays.length; currentStep++) {
      // Within this loop, we consider all the possible jump lengths for the frog (from 1 to maxJumpLength).
      for (let jumpLength = 1; jumpLength <= maxJumpLength; jumpLength++) {
        // We calculate the number of ways the frog can reach the current step by summing up the ways it can reach from each possible jump length.
        // However, we need to ensure that the frog doesn't attempt to jump beyond the bottom step.
        if (currentStep - jumpLength >= BigInt(0)) {
          numberOfWays[currentStep] += numberOfWays[currentStep - jumpLength];
        }
      }
    }
  
    // Finally, we return the number of ways the frog can reach the bottom step of the staircase,
    // which is represented by the last element of the array.
    return numberOfWays.pop();
  };