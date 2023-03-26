//solution for 6kyu grocer grouping
//link to kata: https://www.codewars.com/kata/593c0ebf8b90525a62000221/javascript

function solution(input) {
    let result = ''
    
    let types = {
      fruit: '',
      meat: '',
      other: '',
      vegetable: ''
    }
    
    input = input.split(',').map(input => input.split('_')).sort((a, b) => a[1].localeCompare(b[1]))
    
  
    for (let i = 0; i < input.length; i++) {
      if (input[i][0] in types) {
        types[input[i][0]] += `${input[i][1]} `
       }else types.other += `${input[i][1]} ` 
    }
   
    let list = Object.entries(types)
    
    let final = []
    
    for (let i = 0; i < list.length; i++) {
      const type = list[i][0]
      const items = list[i][1].trim().split(' ').join(',')
      let string = `${type}:${items}`
      final.push(string)
    }
    
    return final.join('\n')
    
  }