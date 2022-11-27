//Soultion for codewars 6kyu WeIrD StRiNg CaSe
//link to kata: https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(string){
    let deepArr = string.toLowerCase().split(' ').map(element => element.split(''))
    let weirdify = []
    for (let i = 0; i < deepArr.length; i++) {
      weirdify.push([])
      for (let j = 0; j < deepArr[i].length; j++) {
        if (j % 2 ===0)  weirdify[i].push(deepArr[i][j].toUpperCase())
        else weirdify[i].push(deepArr[i][j])
      }
    }
   return weirdify.map(word => word.join('')).join(' ')  
  }