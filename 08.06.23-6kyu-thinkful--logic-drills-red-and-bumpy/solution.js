//Solution for 6 kyu Thinkful - Logic Drills: Red and bumpy 
//Link to Kata: https://www.codewars.com/kata/5864cdc483f7e6df980001c8


function colorProbability(color, texture){
    //there are 3 smooth marbles and 7 bumpy marbles
    if (texture === 'smooth') return '0.33'
    else if (color === 'red') return '0.57'
    else if (color === 'green') return '0.14'
    else return '0.28'  
}