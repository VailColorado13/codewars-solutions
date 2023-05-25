//Solution for 6 kyu Simple Fun #156: Rotate Paper By 180 Degrees 
//Link to Kata: https://www.codewars.com/kata/58ad230ce0201e17080001c5


function rotatePaper(number) {
  let equiv = {
    0: '0',
    1: false,
    2: '2',
    3: false,
    4: false,
    5: '5',
    6: '9',
    7: false,
    8: '8',
    9: '6'
  }
  
  let test = []  

  number.split('').forEach(num => test.unshift(`${equiv[num]}`))
  
  return test.join('') === String(number)
}