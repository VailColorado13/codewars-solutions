//Solution for 6kyu Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

//Link to Kata: https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

function balance(left,right){
 
  
    let leftSum = left.split('').reduce((pv, cv) => {
      if (cv === '!') {cv = 2}
      else {cv = 3}
      return pv + cv
    },0)
    
     let rightSum = right.split('').reduce((pv, cv) => {
      if (cv === '!') {cv = 2}
      else {cv = 3}
      return pv + cv
    },0)
    
    return leftSum > rightSum ? 'Left' : rightSum > leftSum ? 'Right' : 'Balance'
}  