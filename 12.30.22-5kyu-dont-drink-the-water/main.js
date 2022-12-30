//Solution for 5kyu Don't Drink The Water 
//Link to Kata: https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript



function separateLiquids(glass) {
  
  if (glass.length < 1) return []
  
  let flat = glass.join(',').split(',')
  let length = glass[0].length
  
  let density = {
    'H': 1.36,
    'W' : 1.00,
    'A' : 0.87,     
    'O' : 0.80
  }
  
  let sorted = flat.sort((a,b) => {
    return density[a] - density[b]
  })
  

  let result = []
  
  for (let i = 0; i < flat.length; i+= length) {
    result.push(sorted.slice(i, i + length))
  }
  
  return result


}