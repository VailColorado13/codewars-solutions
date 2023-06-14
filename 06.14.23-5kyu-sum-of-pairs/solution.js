//Solution for 5 kyu Sum of Pairs 
//Link to Kata: https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(nums, target) { 

  let lastNumber 
  
  for (let i = 1; i <= nums.length; i++) {
    
    if (lastNumber && lastNumber === nums[i]) continue
    lastNumber = nums[i]
    
    const sliced = nums.slice(0, i)
    const sumIndex = sliced.indexOf(target - nums[i])
 
    if (sumIndex !== -1) {
      return [sliced[sumIndex] , nums[i]]
    } 
  }
}