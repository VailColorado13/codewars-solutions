//Solution for Sort rectangles and circles by area II
//Linke to kata: https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/javascript


function sortByArea(array) {

    let obj = {}
    
    for (let i = 0; i < array.length; i++) {
      let area = 0
        if (array[i].length === 2) {
         area = array[i][0] * array[i][1]
       }else {
         area =  Math.PI * array[i]**2
       }
      obj[area] = array[i]
      }
    
    let pairs = Object.entries(obj)
    
    pairs = pairs.sort((a,b) => a[0] - b[0])
    console.log(pairs)
    
    return pairs.map(pair => pair[1])
    
    
  }