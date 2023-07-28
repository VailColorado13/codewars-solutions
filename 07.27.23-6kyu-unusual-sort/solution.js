//Solution for 6 kyu UN-usual Sort 
//Link to Kata: https://www.codewars.com/kata/5443b8857fc4473cb90008e4/javascript

function unusualSort(arrayOfChars){
  
    let digitsCheck = [0,1,2,3,4,5,6,7,8,9]
    let IntsOnly = []
    let stringDigitsOnly = []
    let lettersOnly = []
    
     arrayOfChars.forEach(char => {
       if (digitsCheck.includes(Number(char))) {
         typeof char === 'string' ? stringDigitsOnly.push(char) : IntsOnly.push(char) 
       } else lettersOnly.push(char)
     })
    
    lettersOnly = lettersOnly.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    IntsOnly = IntsOnly.sort((a, b) => a -b)
    stringDigitsOnly = stringDigitsOnly.sort((a, b) => a -b)
    
     let uniqs = new Set([...IntsOnly.concat(stringDigitsOnly.map(str => Number(str)))])
     uniqs = [...uniqs].sort()
      
     
     let counts = uniqs.map(uniq => {
      let countInts = IntsOnly.filter(int => int == uniq).length 
      let countDigs = stringDigitsOnly.filter(int => int == uniq).length 
      return [uniq, countInts, countDigs]
     }) 
      
  
     counts.forEach(count => {
        const number = String(count[0])
        for (let i = 0; i < count[1]; i++) {
          lettersOnly.push(Number(number))
        }
        for (let i = 0; i < count[2]; i++) {
          lettersOnly.push(number)
        }
    })  
    
    return lettersOnly
  
  }