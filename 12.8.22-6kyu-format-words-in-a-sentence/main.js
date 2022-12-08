//Parameters: an array of strings. Some of the strings may be empty. Length of array unknown.
//Result: should return a single string, separated ny commas. The last value should be separated by "and"
//Example: ['potato', 'onion', 'carrot' , '', 'celery'] => potato, onion, carrot and celey
//Pseudocode:
  //check for null input
  //clean up input by doing a Boolean filter. This will remove empty strings
  //check for empty array. If input empty return ''
  //else check for one word array. If array is one word return template literal: `array[0]`
  //else check for two word array. If array is two words return template literal: `array[0] and array[1]`
  //else use .pop() to remove the last value and store it as a variable
  // return template literal `${array1 joined with commas} and lastWord`
  

  function formatWords(words){
    if (!words) {return ''}
    else{
      let clean = words.filter(Boolean)
      if (!clean.length) return ''
      else if (clean.length === 1) return `${clean[0]}`
      else if (clean.length === 2) return `${clean[0]} and ${clean[1]}`
      else {
        let lastWord = clean.pop()
        return `${clean.join(', ')} and ${lastWord}`
      }
    }
  }