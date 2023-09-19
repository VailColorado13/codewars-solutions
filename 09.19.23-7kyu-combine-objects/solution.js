//Solution for 7 kyu Combine objects 
//Link to Kata: https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819

function combine(...objects) {
    let combine = {}
    for (let i = 0; i < objects.length; i++) {
      const current = objects[i]
      for (let item in current) {
        if (!combine[item]) {combine[item] = current[item]}
        else combine[item]+= current[item]
      } 
    }
    return combine
   }