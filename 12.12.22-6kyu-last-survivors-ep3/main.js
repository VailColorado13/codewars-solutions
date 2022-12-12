//Solution for 6kyu Last Survivors Ep.3
//Link to kata: https://www.codewars.com/kata/60a2d7f50eee95000d34f414


function lastSurvivors(strs, nums) {
    let uniArr = strs.join('').split('')
    let answer = []
  
    for(let i = uniArr.length -1; i >= 0; i--) {
      if (nums[i % nums.length] > 0 && uniArr[i] !== ' ') {
        nums[i % nums.length]--
      }
      else answer.push(uniArr[i])
    }
  
   let final = answer.filter(letter => letter !== ' ')
  
   return final.join('')
    
  
  }