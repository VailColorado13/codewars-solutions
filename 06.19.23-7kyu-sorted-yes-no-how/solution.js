//Solution for 7 kyu Sorted? yes? no? how? 
//Link to Kata: https://www.codewars.com/kata/580a4734d6df748060000045/javascript

function isSortedAndHow(array) {
    let descending = true
    let ascending = true
    
    for (let i = 0; i < array.length-1; i++) {
      if (array[i] < array[i+1]) descending = false 
      if (array[i] > array[i+1]) ascending = false 
      if (!ascending && !descending) return 'no'
    }
   
    return ascending ? 'yes, ascending' : 'yes, descending'
}