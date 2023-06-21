//Solution for 7 kyu Spanish Conjugator 
//Link to Kata: https://www.codewars.com/kata/5a81b78d4a6b344638000183


function conjugate(verb){
  
    const er = verb[verb.length -2] === 'e' 
    const ir = verb[verb.length -2] === 'i'
    
    const suffixes = er ?  
     ['o', 'es', 'e', 'emos', 'éis' , 'en'] : ir ?
     ['o', 'es', 'e', 'imos', 'ís' , 'en']  :     
     ['o', 'as', 'a', 'amos' , 'áis', 'an']
    
    let prefix = verb.substring(0, verb.length -2)
    
    let conjugations = []
    
    
    for (const suffix of suffixes) {
      conjugations.push(prefix + suffix)
    }
    
   let response = {}
   
   response[verb] = conjugations
    
    return response
  }