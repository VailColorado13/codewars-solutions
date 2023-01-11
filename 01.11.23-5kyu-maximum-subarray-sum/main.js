//Solution for 5kyu maximum subarray sum 
//Link to Kata: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/javascript


var maxSequence = function(arr){
  
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        // we will reset the current sum value to be the maximum between two options: 
          //arr[i] - if the current index is larger than the sum of the contiguous array that came before it plus the index, we can disregard
          //the array before our current index, because it that array is negativly contributing to the value
      
        currentSum = Math.max(arr[i], currentSum + arr[i])

        //now, we can check against our maximum value - is the current sum larger than the maximum value of a previous subarray 
        //composed of indeces lower than our current? if so we can reset the max. If not, our current max value remains. 
      
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum
}


