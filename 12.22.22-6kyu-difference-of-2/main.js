//Solution to 6kyu Difference of Two 
//Link to Kata: https://www.codewars.com/kata/5340298112fa30e786000688


function twosDifference(input){
    let response = []
    
    for (let i = 0; i < input.length; i++) {
      
      if (input.indexOf(input[i] + 2) !== -1) {
        response.push([input[i], input[input.indexOf(input[i] + 2)]])
      } 
    }
    return response 
  }

