//solution for 6kyu kebabize
//link to Kata: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
    let noNums = str.replace(/[0-9]/g, '')
    let spaceb4UC = noNums.replace(/[A-Z]/g, ' $&').toLowerCase()
    let interm = spaceb4UC.split(' ').join('-')
    
   return interm[0]  === '-' ? interm.substring(1) : interm
  }