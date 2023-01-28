//Solution for 6kyu nth Fibonacci
//Link to Kata: https://www.codewars.com/kata/522551eee9abb932420004a0/javascript

function nthFibo(n) {

    let fib  = [0,1]
    let counter = 1 
     
    while (counter !== n) {
      fib.push(fib[fib.length -1] + fib[fib.length -2])
      counter++
    }
    
   return fib[n-1]
    
  }