//Solution for 6kyu Supermarket Queue
//link to kata: https://www.codewars.com/kata/57b06f90e298a7b53d000a86


function queueTime(customers, n) {
    if (customers.length === 0) return 0
    let tills = new Array(n).fill(0)
    
  for (let i = 0; i < customers.length; i++) {
      let lowestWait = Math.min(...tills)
      let nextUp = tills.indexOf(lowestWait)
      tills[nextUp] += customers[i] 
    }
    
  return Math.max(...tills)
  
  }