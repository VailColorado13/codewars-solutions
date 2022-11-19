//Codewars 6kyu Unique in Order 
//link to kata https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript


var uniqueInOrder=function(iterable){
    let arr = typeof iterable === 'string' ? iterable.split('') : iterable
    
    if (arr.length <= 1) {return arr}
    
    else {
    let spaces = []
    
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] !== arr[i +1]) {
        spaces.push(arr[i])
        spaces.push(' ')
      }
      else {spaces.push(arr[i])}
    }
    
    let final = spaces.join('').split(' ').map((letter) => letter[0])
    
    if (final[final.length-1] === undefined) {
      final.pop()
     }
    console.log(final)
      
      return isNaN(final[0]) ? final : final.map((num) => Number(num))
     }
    
  
    
  }