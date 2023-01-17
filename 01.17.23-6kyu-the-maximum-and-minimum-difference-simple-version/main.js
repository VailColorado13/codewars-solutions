//Solution for The maximum and minimum difference -- Simple version
//Link to kata: https://www.codewars.com/kata/583c5469977933319f000403/javascript


function maxAndMin(arr1,arr2){
      
      let maxDifference = Math.abs(arr1[0] - arr2[0])
      let minDifference = Math.abs(arr1[0] - arr2[0])
      
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          let currentDifference = Math.abs(arr1[i] - arr2[j])
          maxDifference = Math.max(currentDifference, maxDifference)
          minDifference = Math.min(currentDifference, minDifference)
        }
    
      }
      
    return [maxDifference , minDifference]
}