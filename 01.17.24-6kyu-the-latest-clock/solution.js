//Solution for 6 kyu The latest clock 
//Link to Kata: https://www.codewars.com/kata/58925dcb71f43f30cd00005f/discuss/javascript

function latestClock(...availNums) {
  availNums = availNums.map(num => String(num)).reduce((obj, item) => {
      if (!obj[item]) obj[item] = 0
      obj[item]++
    return obj
  }, {})
  let hours = ['23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01', '00']

  for (let i = 0; i < hours.length; i++) {
    let tempAvail = {...availNums}
    let hFirstDigit = hours[i][0]
    let hSecondDigit = hours[i][1]
    
    if (hFirstDigit in tempAvail && hSecondDigit in tempAvail) {
      tempAvail[hFirstDigit]--
      tempAvail[hSecondDigit]--
      if (tempAvail[hFirstDigit] < 0 || tempAvail[hSecondDigit] < 0) continue
      else { 
        let hour =`${hFirstDigit}${hSecondDigit}` 
        let minute = ''
           let remainingDigits = Object.entries(tempAvail).map(([key, value]) => key.repeat(value)).join('')       
           let a = Number(remainingDigits)
           let b = Number(String(remainingDigits).split('').reverse().join(''))
           let options = [a,b].filter(num => num <= 59)
            
        if (options.length) {  
          let finalMinutes = String(Math.max(...options))
          if (finalMinutes.length === 1) finalMinutes = `0${finalMinutes}`
          return `${hour}:${finalMinutes}`
        }
      }
    }  
  }
}