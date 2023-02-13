//Solution for Basics 04 Rotate Matrix
//Link to kata: https://www.codewars.com/kata/56b5dd1702a30326ce000b02


var rotateMatrix = arr => {
  
    let ans = []
    
    while (arr[0].length) {
      let temp = []
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].pop()) 
      }
      ans.push(temp)
    }
    
    return ans
    
  }