//Solution for 6kyu Decipher This! 
//Link to Kata: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/javascript

function decipherThis(str) {
    let arr = str.split(' ')
    let regex = /[a-z]/ 
   
    
    let split = arr.map(x => x.replace(regex, ' $&')).map(y => y.split(' '))
    let firstLetters = []
    let secondHalves = []
    
    split.forEach(cipher => {
     firstLetters.push(String.fromCharCode(Number(cipher[0])))
     if (!cipher[1]) secondHalves.push([''])
     else secondHalves.push(cipher[1].split(''))
    })

     for (let i = 0; i < secondHalves.length; i++) {
       if (secondHalves[i].length <= 2) [secondHalves[i] = secondHalves[i].reverse()]
       else {
         let temp = secondHalves[i][0]
         secondHalves[i][0] = secondHalves[i][secondHalves[i].length -1]
         secondHalves[i][secondHalves[i].length -1] = temp
       }

     }
     let response = ''
       for (let i = 0; i < secondHalves.length; i++) { 
         response += `${firstLetters[i]}${secondHalves[i].join('')} `
       }
    return response.trim()

   }