//Solution for 6 kyu Alphabet Slices 
//Link to Kata: https://www.codewars.com/kata/64c45287edf1bc69fa8286a3


function solution(str){
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      let index = 0 
      let result = ''
      let sequences = [] 
      
      while (index < str.length) {
        let sequence = str[index]
        let alphabetcalOrder = true
        
        while (alphabetcalOrder === true) {
          if (alphabet.indexOf(str[index]) + 1 === alphabet.indexOf(str[index + 1])) {
            sequence+= str[index + 1]
            index++
          }
          else alphabetcalOrder = false 
        }
        sequences.push(sequence)
        index++
      }
      
   sequences = sequences.map(str => str.split('').reverse().join(''))
  
  return sequences.join('')

} 