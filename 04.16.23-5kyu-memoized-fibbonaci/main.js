//Solution for 5kyu Memoized Fibonacci 
//Link to Kata: https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = (n, m = []) => {
    if (m[n]) {
      return m[n]
    }
    if (n >= 2) {
      return (m[n] = fibonacci(n-1, m) + fibonacci(n -2, m))
    }
    return n
  }