//Solution for 7kyu Speed Control
//Link to kata: https://www.codewars.com/kata/56484848ba95170a8000004d/solutions?filter=me&sort=best_practice&invalids=false

function gps(s, x) {
    if (x.length < 2) return 0
  
    let deltas = []
    
    for (let i = x.length -1; i > 0; i--) {
      deltas.unshift(x[i] - x[i-1])
    }
   
  let speed = deltas.map(delta => {
    return Math.floor((3600 * delta) / s)
  })
  
  return Math.max(...speed)
  
}