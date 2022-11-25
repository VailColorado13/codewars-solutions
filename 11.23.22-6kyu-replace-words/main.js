//Solution for 6kyu Simple Fun #218: Replace Words
//link to kata: https://www.codewars.com/kata/59014fbb526ff1af0400004b/train/javascript


function replaceWords(sentence) {
    let arrOne = sentence.split(' ')
    let deepArr = []
    
    
    for (let i = 0; i < arrOne.length; i++) {
      deepArr.push([arrOne[i],arrOne[i].length,i])
    }
    
    
    
    let sortedDeep = deepArr.sort((a, b)  => a[1] - b[1])
    
    
    let finalOrder = []
    
  
    
    let half = Math.floor(sortedDeep.length/2)
    
    for (let i = 0; i < half; i++) {
      finalOrder.push([sortedDeep[0][0] , sortedDeep[sortedDeep.length -1][2]])
      finalOrder.push([sortedDeep[sortedDeep.length -1][0] , sortedDeep[0][2]])
      sortedDeep.pop()
      sortedDeep.shift()
      
    }
  
    
     if (sortedDeep.length > 0) {finalOrder.push([sortedDeep[0][0]   ,  sortedDeep[0][2]])}
    
     finalOrder.sort((a,b) => a[1] - b[1])
    
    let finalSentence = finalOrder.map(word => word[0].toLowerCase())
  
    for (let i = 0; i <= finalSentence.length; i++) {
      if (finalSentence[i] === 'i') {
        finalSentence.splice(i, 1, "I")
      }
      
      
    }
    
    
     let firstWord = finalSentence.shift()
     let firstWordCapitalized = firstWord[0].toUpperCase() + firstWord.slice(1)
     
     
     let res = firstWordCapitalized +  ' ' + finalSentence.join(' ')
     return res.trim()
  
    
        
  }