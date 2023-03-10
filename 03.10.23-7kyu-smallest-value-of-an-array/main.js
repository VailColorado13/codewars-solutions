//solution for 7kyu smallest value of an array
//link to kata: https://www.codewars.com/kata/544a54fd18b8e06d240005c0



const min = (arr, toReturn) => toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr)
