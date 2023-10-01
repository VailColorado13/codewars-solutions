//Solution for 7 kyu Homogenous arrays 
//Link to Kata: https://www.codewars.com/kata/57ef016a7b45ef647a00002d/javascript

const filterHomogenous = (arrays) => arrays.filter(array => array.length).filter(array => array.every(value => typeof value === 'string') || array.every(value => typeof value === 'number'))
