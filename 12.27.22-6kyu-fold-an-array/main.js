//Solution for 6kyu Fold and Array
//Link to kata: https://www.codewars.com/kata/57ea70aa5500adfe8a000110/javascript




function foldArray(array, runs){

    let middle =  Math.ceil(array.length/2)
    let leftHalf = array.slice(0, middle)
    let rightHalf = array.slice(middle).reverse()
      
    for (let i = 0; i < rightHalf.length; i++) {
      leftHalf[i] += rightHalf[i]
    }
    
    if (runs === 1) return leftHalf
    else return foldArray(leftHalf, runs -1)
    
  }