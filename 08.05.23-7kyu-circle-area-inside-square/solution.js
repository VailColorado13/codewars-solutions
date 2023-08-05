//Solution for 7 kyu Circle area inside square 
//Link to Kata: https://www.codewars.com/kata/5899aa695401a83a5c0000c4

function squareAreaToCircle(size){
    const radius = Math.sqrt(size)/2
    const pi = Math.PI;
    const areaOfCircle =  pi * radius * radius
  
    return areaOfCircle
  }
  