//Solution for 6 kyu Duplicate Arguments 
//Link to Kata: https://www.codewars.com/kata/520d9c27e9940532eb00018e


function solution(...arguments){
    let set = new Set(arguments)
    let uniques = Array.from(set)
    return uniques.length !== arguments.length
}