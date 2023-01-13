//Solution for 6kyu Simple Frequency Sort
//Link to kata: https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr){
  

    let counts = arr.reduce((obj, num) => {
      if (!obj[num]) obj[num] = 1
      else obj[num]++
      
      return obj
    },{})
    
    
    let countsArr = Object.entries(counts)
              .sort((a,b) => {
                if (a[1] !== b[1]) return b[1] - a[1]
                else return a[0] - b[0]
              })
    console.log(countsArr)    
    
    let answer = ''
    
    for (let i = 0; i < countsArr.length; i++) {
      for (let j = 0; j < countsArr[i][1]; j++) {
        answer += `${countsArr[i][0]} `
      }  
      
    }
    
 
    return answer.trim().split(' ').map(num => Number(num))
                                            
  }