//Solution for 7 kyu Triangular Treasure 
//Link to Kata: https://www.codewars.com/kata/525e5a1cb735154b320002c8

function triangular( n ) {
    return n <= 0 ? 0 : n * (n + 1) / 2;
  }