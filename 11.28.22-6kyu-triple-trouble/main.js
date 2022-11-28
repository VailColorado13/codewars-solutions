//Solution for codewars 6kyu Triple Trouble
//link to Kata: https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript


function tripledouble(num1, num2) {
    let arr1 = String(num1).split('')
    let arr2 = String(num2).split('')
    let firstCheck = []
    let secondCheck = []
    
    for (let i = 0; i < arr1.length -2; i++) {
      if (arr1[i] === arr1[i+1] && arr1[i] === arr1[i+ 2]) firstCheck.push(arr1[i])
    }
    
     for (let i = 0; i < arr2.length -1; i++) {
      if (arr2[i] === arr2[i+1]) secondCheck.push(arr2[i])
    }
    
    
    let thirdCheck = secondCheck.filter(x => firstCheck.includes(x))
    
  
   return firstCheck.length < 0 ? 0 : thirdCheck.length <= 0 ? 0 : 1
     
  }