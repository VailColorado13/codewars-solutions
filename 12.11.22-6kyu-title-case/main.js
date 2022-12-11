//Solution for 6kyu Title Case 
//Link to Kata: https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript


function titleCase(title, minorWords) {
    if (title === '') return title
    let LC = title.toLowerCase()
    let arr = LC.split(' ')
    let firstWord = arr.shift()
    let firstWordTC = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase()
    if (arr.length === 0) return firstWordTC
    
    if (minorWords) {
      let minorWordsLC = minorWords.split(' ').map(word => word.toLowerCase())
    
    let titleArr = arr.map((word) => {
      if (minorWordsLC.includes(word)) return word
      else return word.charAt(0).toUpperCase() + word.slice(1)    
    })
     return `${firstWordTC} ${titleArr.join(' ')}`
  
    }
    
    else if (!minorWords) {
    let titleArr = arr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)    
    })
     return `${firstWordTC} ${titleArr.join(' ')}`
  
    }
}