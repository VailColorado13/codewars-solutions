//Solution for 6 kyu Sequences and Series 
//Link to Kata: https://www.codewars.com/kata/5254bd1357d59fbbe90001ec/javascript

function getScore(n) {
    let cache = {}
    
    const triangleMemo = (number) => {
      if (!cache[number]) {
        cache[number] = number <= 1 ? 1 : number + triangleMemo(number - 1)
      }
      return cache[number]
    }
    
    return triangleMemo(n) * 50
  
  }