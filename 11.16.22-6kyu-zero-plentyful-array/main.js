//Codewars Zero-Plentiful Array
//https://www.codewars.com/kata/59e270da7997cba3d3000041/train/javascript

// An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

// Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

// Examples
// [0, 0, 0, 0, 0, 1]  -->  1
// # 1 group of 5 zeros (>= 4), thus the result is 1

// [0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
// # 2 group of 4 zeros (>= 4), thus the result is 2

// [0, 0, 0, 0, 1, 0]  -->  0 
// # 1 group of 4 zeros and 1 group of 1 zero (< 4)
// # _every_ sequence of zeros must be at least 4 long, thus the result is 0

// [0, 0, 0, 1, 0, 0]  -->  0
// # 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

// [1, 2, 3, 4, 5]  -->  0
// # no zeros

// []  -->  0
// # no zeros


//------------------------------------------------------------------------------------------\\

function zeroPlentiful(arr){
  
    //first let's get rid of any inputs that are > 9 and < 0, and replace them with a 1
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > 9 || arr[i] < 0) {arr.splice(i, 1, 1)}
    }
  
    //split the array up into an array of zero sequences as strings
    
    let string = arr.join('') // < this turns the array into a string 
    let splitString = string.replace(/[1-9]/g, ' ') // < with that string, we use regex to replace all the non-zero digits with a space
    let newArr = splitString.split(' ') // < nowe we can split the array up by spaces, which gives us an array of 0 sequences as strings 
    //there are a couple empty strings in our array, as well as some '-'s from negatives, so we'll just remove those with a filter 
   
    let zeroSeqs = newArr.filter(x => x.length !== 0)
    //get the length of all of those strings. 
    
    let lengths = zeroSeqs.map(zeros => zeros.length)
    
    
   //now we'll use a filter to determine if any of the lens are < 4
    
    let tooSmall = lengths.filter(length => length < 4)
    
    
    //now we'll return! 
    
    return tooSmall.length > 0 ? 0 : lengths.length
  
  }