//solution for 6kyu pair of shoes
//link to kata: https://www.codewars.com/kata/58885a7bf06a3d466e0000e3


function pairOfShoes(shoes) {
	
  let allSizes = shoes.map(shoe => shoe[1])
  let uniqSizes = [...new Set(allSizes)]
  
  
  for(let i = 0; i < uniqSizes.length; i++) {
    let currentSize = shoes.filter(shoe => shoe[1] === uniqSizes[i]).map(pair => pair[0])
    let sum = currentSize.reduce((cv, pv) => pv + cv, 0)
    if (sum / currentSize.length !== 0.5) return false
  }
  return true  
  
}