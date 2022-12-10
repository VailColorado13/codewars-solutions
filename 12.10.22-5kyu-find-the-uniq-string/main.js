//Solution for 5kyu find the unique string
//link to kata: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/javascript

//Parameters: we are given an array of strings. All of the strings are permutations of eachother, except for one
//Results: return the string that is not a permutation
//Example: "I am Lord Voldemort" and "Tom Marolo Riddle" are permutations of eachother. 'Harry Potter' is not. Return Harry Potter  
//Pseudocode: 
  //make all the strings lowercase. 
  //then split each string into a 2D array. 
  //themn create a new Set out of each of them and sorted them
  //the search through those sets and found the index of the odd one out. 
  //return arr[index of odd one out]


  function findUniq(arr) {
    let sorted = arr.map(string => {return string.toLowerCase().split('').sort()})
    let uniqs = sorted.map(sorted => [...new Set(sorted)].join(''))
    
    for (let i = 0; i <= uniqs.length; i++) {
      if (uniqs.indexOf(uniqs[i]) === uniqs.lastIndexOf(uniqs[i])) return arr[i]   
    }
  }


