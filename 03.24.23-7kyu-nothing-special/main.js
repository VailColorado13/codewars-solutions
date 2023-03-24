//solution for 7kyu nothing special 
//link to kata: https://www.codewars.com/kata/57029e77005264a3b9000eb5/javascript


function nothingSpecial(str) {

  if (typeof str != 'string') return 'Not a string!'
  
  let response = ''
  const regex = /[a-zA-Z0-9\s]/
  
  
  for (let i = 0; i < str.length; i++) {
    regex.test(str[i]) ? response+= str[i] : response = response
  }
  
  return response

}