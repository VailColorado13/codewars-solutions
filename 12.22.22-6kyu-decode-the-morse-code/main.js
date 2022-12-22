//Solution to 6kyu decode the morse coce
//link to kata: 



decodeMorse = function(morseCode){
  
    let words = morseCode.split('   ').filter(x => x[0] !== undefined).map(word => word.split(' '))
    
    console.log(words)
    
    let decode = ''
    
    words.forEach(word => {
      
      for(let i = 0; i < word.length; i++) {
        if (word[i] !== '') { decode += MORSE_CODE[word[i]] }
        }
       decode += ' '
    })
   return decode.trim()
    
}