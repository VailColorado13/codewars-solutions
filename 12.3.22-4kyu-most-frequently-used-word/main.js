//Solution for 4kyu Most frequently used words in a text
//link to kata: https://www.codewars.com/kata/51e056fe544cf36c410000fb/javascript


function topThreeWords(text) {
    let lowerCaseText = text.toLowerCase()
    //first use a regex to get replace linebreaks (\n) with spaces
    let noLineBreaks = lowerCaseText.replace(/(\r\n)+|\r+|\n+|\t+/gm, ' ')
    //use a regex to handle for non-apostrophe, non-letter characters and replace them with whitespace
    let noSpecChars = noLineBreaks.replace(/(?!(?<=[a-z])'[a-z])[^\w\s]/gm, ' ')
    let arr = noSpecChars.split(' ').filter(Boolean)
    //now we are going to use reduce to deterimine the counts of each word. This will return an object:
    let counts = arr.reduce((count, word) => {
      if (!count[word]) count[word] = 1
      else count[word]++     
      return count
    },{})
    
    //now we'll turn that object into an array so it's easier to work with 
    let entries = Object.entries(counts)
    
    //sort by count 
    let sortedCounts = entries.sort((a,b) => b[1] - a[1])
    
    //trim down to just top three 
    let topThreePairs = sortedCounts.slice(0,3)
    //use map to select just the word, not the count
    let topThreeWords = topThreePairs.map(word => word[0]) 
    return topThreeWords 
   
  }