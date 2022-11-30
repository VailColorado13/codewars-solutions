//Solution for Codewars 6kyu Is a number prime?
//link to Kata: https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript


function isPrime(num) {
    let res = []
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) res.push(i)
    }
    if (num <= 1) {return false}
    else if (res.length > 1) {return false}
    else {return true}
  }