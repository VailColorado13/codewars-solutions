//Solution for 4 kyu Strip Comments 
//Link to Kata: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/

function solution(input, markers) {
    input = input.split('\n')
    let output = []
  
    for (let i = 0; i < input.length; i++) {
      let stripped = input[i]
      for (let m = 0; m < markers.length; m++) {
        if (input[i].indexOf(markers[m]) !== -1) {
          stripped = input[i].substring(0, input[i].indexOf(markers[m]))
        }
        else continue
      }
      output.push(stripped)
    }
    return output.map(line => line.trim()).join('\n')
  }