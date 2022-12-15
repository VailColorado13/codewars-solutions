//Solution for 6kyu Circularly Sorted Array
//Link to Kata: https://www.codewars.com/kata/544975fc18f47481ba00107b


function isCircleSorted( arr ){
    if (arr.length === 0) {return true} 
    let min = Math.min(...arr)
    let strCheck = arr.join(',')
    let lowestNums
    
    if (arr[0] === min && arr[arr.length -1] === min) {lowestNums = arr.splice(arr.lastIndexOf(min))}
    else {lowestNums = arr.splice(arr.indexOf(min))}
    
    let checkSort = lowestNums.concat(arr)

    
    let ascending = strCheck.split(',').map(x => Number(x)).sort((a,b) => a - b).join('')
  
    return checkSort.join('') === ascending ? true : false
    
    
}