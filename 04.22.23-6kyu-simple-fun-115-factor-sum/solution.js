//Solution for 6 kyu Simple Fun #115: Factor Sum 
//Link to Kata: https://www.codewars.com/kata/589d2bf7dfdef0817e0001aa/javascript

function factorSum(n) {
  if (isPrime(n)) return n
  
  let primeFactors = []
  
  function getNextFactors (n) {
  let [smallestPrime, secondNumber] = getFirstPair(n)
    primeFactors.push(smallestPrime)
    isPrime(secondNumber) ? primeFactors.push(secondNumber) : getNextFactors(secondNumber)
  }
  
  getNextFactors(n)
  let sumOfPrimes = primeFactors.reduce((pv, cv) => pv + cv)
   
  
  if (isPrime(sumOfPrimes)) return sumOfPrimes
  if (sumOfPrimes === n) return sumOfPrimes
  else return factorSum(sumOfPrimes)
  
}
  
  
function isPrime(number) {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function findSmallestPrime(number) {
    let smallestPrime 
  
  
  for (let i = 2; i <= number; i++) {
    if (number % i == 0 && isPrime(i)) {
      smallestPrime = i
      break
    }
  }
 
 return smallestPrime
  
  
}
function getFirstPair (number) {
  let smallestPrime = findSmallestPrime(number)
  return  [smallestPrime, number/smallestPrime]

}