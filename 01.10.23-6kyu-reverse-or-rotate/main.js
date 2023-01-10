//Solution for 6kyu Reverse or Rotate
//Link to Kata: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript




function revrot(str, sz) {
    if (str.length === 0 || sz <= 0 || sz > str.length) return ''
    str = str.split('')
    let chunks =[]
    let result = []
  
    for (let i = 0; i <= str.length; i+= sz) {
      let  chunk = str.slice(i, i+sz)
      chunks.push(chunk)
    }
    
    if (chunks[chunks.length -1].length < sz) chunks.pop()
  
    for (let i = 0; i < chunks.length; i++) {
    
      let sumOfCubes = chunks[i].reduce((pv, cv) => {
        return Number(pv) + Number(cv)**3 
      })
      console.log('sum of cubes for' , chunks[i] , 'is' , sumOfCubes ) 
      
      if (sumOfCubes % 2 === 0) {
        result.push(chunks[i].reverse().join(''))
        console.log('reversed' ,chunks[i])
      }
      else {
      result.push(rotateLeft(chunks[i]).join(''))
      } 
        function rotateLeft(array) {
          let firstNumber = array.shift()
          return array.concat(firstNumber)
        }
    }
    
    
   return result.join('')
    
  }