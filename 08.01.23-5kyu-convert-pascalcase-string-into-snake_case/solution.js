//Solution for 5 kyu Convert PascalCase string into snake_case 
//Link to Kata: https://www.codewars.com/kata/529b418d533b76924600085d

function toUnderscore(string) {
  string = String(string)
  let snake = ''
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < string.length; i++) {
    if (i === 0) snake += string[i].toLowerCase()
    else if (digits.includes(string[i])) snake += string[i]
    else if (string[i].toUpperCase() === string[i]) {
      snake += '_'
      snake += string[i].toLowerCase()
    }
    else snake += string[i]
  }
  return snake
}