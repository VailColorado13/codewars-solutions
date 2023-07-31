//Solution for 6 kyu Consecutive Count 
//Link to Kata: https://www.codewars.com/kata/59c3e819d751df54e9000098


// This function takes two parameters:
// 1. 'items': An input value that can be of any data type but will be converted to a string.
// 2. 'key': A value that will also be converted to a string.

function getConsectiveItems(items, key) {
  // Convert the 'items' and 'key' parameters to strings.
  items = items.toString();
  key = key.toString();
  
  // Initialize variables to keep track of the maximum consecutive occurrences and the current count.
  let max = 0, current = 0;
  
  // Loop through each character in the 'items' string.
  for (let c of items) {
    // Check if the current character matches the 'key'.
    if (c == key) {
      // If it does, increment the 'current' count by 1 to represent consecutive occurrences.
      current = current + 1;
    } else {
      // If the current character doesn't match the 'key', reset the 'current' count to 0.
      current = 0;
    }
    
    // Check if the current consecutive count is greater than the 'max' count so far.
    if (current > max) {
      // If it is, update the 'max' count to the current consecutive count.
      max = current;
    }
  }
  
  // After processing all characters, return the maximum consecutive count of 'key'.
  return max;
}