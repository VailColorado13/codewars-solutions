//Solution for 6kyu PhoneWords
//Link to Kata: https://www.codewars.com/kata/635b8fa500fba2bef9189473/javascript


function phoneWords(stringOfNums) {
  if (stringOfNums.length === 0) return ''
    
      let lookup = {
        '0': ' ',
        '1': ' ',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',      
      }
      
    let letters = ''

    for(let i = 0; i < stringOfNums.length; i++) {
      if (stringOfNums[i] !== stringOfNums[i +1]) letters += `${stringOfNums[i]} `
      else letters += `${stringOfNums[i]}`
    }
  
  let splitOne = letters.split(' ').filter(key => key.length > 0).filter(key => key !== '1')
  
  let splitTwo = []
  
  
  for(let i = 0; i < splitOne.length; i++) {
    if (splitOne[i].length <= lookup[splitOne[i][0]].length) splitTwo.push(splitOne[i])
    else {
      
      let loops = (Math.floor(splitOne[i].length / lookup[splitOne[i][0]].length))
      let currentNumber = splitOne[i][0]
      let keyPadLength = lookup[splitOne[i][0]].length
      let remainder = splitOne[i].length % keyPadLength
      
      
      
      for (let l = 0; l < loops; l++) {
        splitTwo.push( currentNumber.repeat(keyPadLength) )
      }
       if (remainder > 0)  splitTwo.push( currentNumber.repeat(remainder) )

    }
  }
  
  let text = ''
  if (splitTwo.length === 0) return ''
 console.log('splitTwo', splitTwo)
  let splitThree = splitTwo.filter(split => split[0] !== '1')
  
  
  if (splitThree.length === 0) return ''
  
 for (let i = 0; i < splitThree.length; i++) {
   
   text += lookup[splitThree[i][0]].charAt(splitThree[i].length -1) 
 }
  

return text  
}
