//Solution for 5kyu Tongues
//Link to Kata: https://www.codewars.com/kata/52763db7cffbc6fe8c0007f8



function tongues(code) {

    let vowelsLC = ['a', 'i', 'y', 'e', 'o', 'u']
    let vowelsUC = ['A', 'I', 'Y', 'E', 'O', 'U'] 
    let consonantsLC = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f']
    let consonantsUC = ['B', 'K', 'X', 'Z', 'N', 'H', 'D', 'C', 'W', 'G', 'P', 'V', 'J', 'Q', 'T', 'S', 'R', 'L', 'M', 'F']
    
  
    let decode = ''
    
    console.log(code)
    for (let i = 0; i < code.length; i++) {
       
      if (vowelsUC.includes(code[i])) { 
        let newLetter =  vowelsUC[(vowelsUC.indexOf(code[i]) + 3) % 6]   
        decode += newLetter
      }
      
      else if (vowelsLC.includes(code[i])) { 
        let newLetter =  vowelsLC[(vowelsLC.indexOf(code[i]) + 3) % 6]   
        decode += newLetter
      }
      
       else if (consonantsUC.includes(code[i])) { 
        let newLetter =  consonantsUC[(consonantsUC.indexOf(code[i]) + 10) % 20]   
        decode += newLetter
      }
      
      else if (consonantsLC.includes(code[i])) { 
        let newLetter =  consonantsLC[(consonantsLC.indexOf(code[i]) + 10) % 20]   
        decode += newLetter
      }
     else {decode += code[i]}
      
    }
    
  return decode
  }