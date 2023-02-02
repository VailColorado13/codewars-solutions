//Solution for 7kyu Cats in Hats
//link to kata: https://www.codewars.com/kata/57b5907920b104772c00002a/solutions/javascript


function height(n) {
  
    let height = [2000000]
   
    
    while (height.length <= n) {
      const lastCat = height[height.length -1]    
  
      height.push(lastCat / 2.5)
      
    }
  
    return height.reduce((pv,cv) => pv + cv).toFixed(3)
    
  }