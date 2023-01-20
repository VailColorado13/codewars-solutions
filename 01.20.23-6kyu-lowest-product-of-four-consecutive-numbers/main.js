//Solution to 6kyu Lowest Product of Four Consecutive Numbers
//Link to kata: https://www.codewars.com/kata/554e52e7232cdd05650000a0

function lowestProduct(input) { 
    if (input.length < 4) {return 'Number is too small'}
    
    input = input.split('').map(str => Number(str))
    let minProduct = Infinity 
    
    for (let i = 0; i <= input.length -4; i++) {
      const currentProduct = input.slice(i, i+4).reduce((pv, cv) => pv*cv,1)
      minProduct = Math.min(minProduct, currentProduct)  
    }
    
    return minProduct

}