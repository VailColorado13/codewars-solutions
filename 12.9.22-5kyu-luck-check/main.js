//Solution for 5kyu Luck Check
//Link to Kata: https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

function luckCheck(ticket){
    let letters = /[^0-9]/g
    
    if(!letters) throw new Error()
    if (letters.test(ticket)) throw new Error()
    else if (ticket.length === 0) throw new Error()
    
    
    let mainArr = ticket.split('').map(x => Number(x))
  
    let firstSide = mainArr.splice(0, Math.floor(mainArr.length/2))
    let secondSide = mainArr
    
    
    if (secondSide.length  > firstSide.length) secondSide.shift()
    
    
    return firstSide.reduce((pv,cv) => pv + cv,0) === secondSide.reduce((pv,cv) => pv + cv,0) ? true : false
    
  }