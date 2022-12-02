function beggars(alms, beggars){
    //first we will create an array that is filled with zeros. we can think of this array as
    //the amount that each beggar begins with, which is zero
    let result = new Array(beggars).fill(0)
    //now we will create a for loop to determine how much each beggar gets. Each beggar's place in line can 
    //be representeded by their index in the above array. So the first beggar takes the index at zero, second at one
    //however, we need to control for the line looping back around. 
    //we'll control for that with a modulus operator. So let's say we have 10 beggars and 20 alms to give. 
    //the first beggar will get the zeroeth and the 10th alm.
    //so to determine that he gets those alms, we can take the index we are currenty on, i,
    //and the total number of beggars, n as a divisor in a modulous operation. 
    //when i = 0; i % 10 === 0
    //when we get to the back of the line and loop back around, at index 10, then we have the following modulous opewration" 
    //10 % 20; which also === 0, so the first beggar gets index 10 from the alms as well
    for (let i = 0; i < alms.length; i++) {
      result[i % beggars] += alms[i]
    }
    return result
    
  }