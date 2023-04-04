//Solution for 6kyu Simple Fun #186: Duplicate Phone Numbers
//Link to kata: https://www.codewars.com/kata/58bf67eb68d8469e3c000041/train/javascript

function findDuplicatePhoneNumbers(phoneNumbers){
const dict  = {
  "1": ["1"],
  "2": ["2", "a", "b", "c"],
  "3": ["3", "d", "e", "f"],
  "4": ["4", "g", "h", "i"],
  "5": ["5", "j", "k", "l"],
  "6": ["6", "m", "n", "o"],
  "7": ["7", "p", "q", "r", "s"],
  "8": ["8", "t", "u", "v"],
  "9": ["9", "w", "x", "y", "z"],
  "0": ["0"]
  }
  
  let cleanData = phoneNumbers.map(number => number.toLowerCase().replace(/-/g, ''))
  let keyPresses = []
  
  for (let i = 0; i < cleanData.length; i++) {
    let keysPressed = ''
    
    for (let j = 0; j < cleanData[i].length; j++) {
            for (let key in dict) {
              if (dict[key].includes(cleanData[i][j])) {
                keysPressed += key
              break;
              }
            }
          } 
          keyPresses.push(keysPressed)
        }
  
 
    let counts = keyPresses.reduce((obj, combo) => {
      if (!obj[combo]) obj[combo] = 1
      else obj[combo]++ 
      return obj
    }, {})
  
  
 
  let arr = Object.entries(counts)  
  let answer = []
  
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 1) answer.push(`${format(arr[i][0])}:${arr[i][1]}`)
      
  }
  
return answer
}


function format(number) {

  const prefix = number.substring(0, 3);
  const line = number.substring(3);
  return `${prefix}-${line}`;
}