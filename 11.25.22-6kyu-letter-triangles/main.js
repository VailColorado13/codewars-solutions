//Solution for Codewars 6kyu Letter Triangles
//link to kata: https://www.codewars.com/kata/635e70f47dadea004acb5663/train/javascript



function triangle(row) {
    const alphabet = '_abcdefghijklmnopqrstuvwxyz'
    let deepArr =[] 
    deepArr.push(row.split(''))
  
    for (let i = 1; i < row.length; i++) {
      deepArr.push([])
      for (let j = 0; j < deepArr[i -1].length-1; j++) {
        let temp = alphabet.indexOf(deepArr[i-1][j]) + alphabet.indexOf(deepArr[i-1][j+1]) 
        if (temp <= 26) {deepArr[i].push(alphabet.charAt(temp))}
        else {deepArr[i].push(alphabet.charAt(temp-26))}
      }
    }
  
   return deepArr[deepArr.length -1][0]
  
  }