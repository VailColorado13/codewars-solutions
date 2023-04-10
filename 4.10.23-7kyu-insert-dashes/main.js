//Solution for 7kyu insert dashes
//link to kata: https://www.codewars.com/kata/55960bbb182094bc4800007b

function insertDash(num) {
    let arr = String(num).split('')
    let result = []
  
    for (let i = 0; i < arr.length; i++) {    
      if (Number(arr[i]) % 2 && Number(arr[i+1]) % 2) {
        result.push(String(arr[i]))
        result.push('-')
      }
      else result.push(String(arr[i]))
    }
    
    return result.join('') 
  }
  