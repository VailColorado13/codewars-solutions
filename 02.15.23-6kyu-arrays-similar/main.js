//Solution for 6kyu Arrays Similar
//Link to kata: https://www.codewars.com/kata/51e704f2d8dbace389000279/javascript

function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    if ( arr1.length !== arr2.length ) return false
    for ( let i=0; i<arr1.length; i++) {
      if ( arr1[i] !== arr2[i] ) return false
    }
    return true
  }