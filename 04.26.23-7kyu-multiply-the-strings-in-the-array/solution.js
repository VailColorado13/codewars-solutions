//Solution for 7 kyu Multiply the strings in the array 
//Link to Kata: https://www.codewars.com/kata/59b2963132779166d2001018

const arrMultiply = (arr) => String(arr.map(str => Number(str)).reduce((pv,cv) => pv*cv,1))
