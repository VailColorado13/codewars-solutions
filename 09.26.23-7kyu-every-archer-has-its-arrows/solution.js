//Solution for 7 kyu Every archer has its arrows 
//Link to Kata: https://www.codewars.com/kata/559f89598c0d6c9b31000125/solutions/javascript

const archersReady = (archers) => archers.length > 0 && archers.every(quiver => quiver >= 5)
