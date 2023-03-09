//Solution for 7kyu Arithmetic progression 
//Link to kata: https://www.codewars.com/kata/55caf1fd8063ddfa8e000018

function arithmeticSequenceElements(a, d, n) {
	
    let result = [a]
    
    while (result.length < n) {
      let next = result[result.length -1] + d
      
      result.push(next) 
      
    }
    
    return result.join(', ')
    
  }