//Solution for 6kyu maximum sum value of ranges 
//Link to kata: https://www.codewars.com/kata/583d10c03f02f41462000137/javascript


function maxSum(arr,ranges){
    let arrOfSums = []
    
    ranges.forEach(range => {
       let rangeSum = 0
      for (let i = range[0]; i <= range[1]; i++) {
       rangeSum += arr[i]
      }
      arrOfSums.push(rangeSum)
    })  
    return Math.max(...arrOfSums) 
  }