//Solution for 6kyu FizzBuzz Backwards 
//Link to kata: https://www.codewars.com/kata/59ad13d5589d2a1d84000020/javascript



//PARAMETERS: an array of integers (1-50) and strings, "Fizz," "Buzz", "FizzBuzz". Array will always start at 1.

//RESULTS: an array of two ints. 
//result[0] === the divisor that numbers deivde by are replaced with Fizz
//result[1] === the divisor that numbers deivde by are replaced with Buzz 

//EXAMPLE: with the following array, 
//[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]
//we should return [2,3]
//that is because the first instance of Fizz is at the second (2) position, so we know that is the divisor
//the first instance of Buzz is the third (3) position, so we know that is the second divisor


//PSEUDOCODE: 
//set up variable to store the result 

//if the array contains 'Fizz' result[0] equals the index of 'Fizz' +1 
    //if not, it equals the indexOf 'FizzBuzz' + 1 

//repeat for result[1] and "Buzz'


function reverseFizzBuzz(array) {
    let result = []
    if (array.includes('Fizz')) result.push(array.indexOf('Fizz') +1)
    else result.push(array.indexOf('FizzBuzz') +1)
  
    if (array.includes('Buzz')) result.push(array.indexOf('Buzz') +1)
    else result.push(array.indexOf('FizzBuzz') +1)
    
    return result
  };