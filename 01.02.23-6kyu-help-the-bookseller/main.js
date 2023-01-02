//Solution for 6kyu Help the Bookseller!
//Link to Kata: https://www.codewars.com/kata/54dc6f5a224c26032800005c/javascript


function stockList(listOfArt, listOfCat){
  
 if (listOfCat.length === 0 || listOfArt.length === 0) return ''

  let objectSum = {}
  
   for (let i = 0; i < listOfCat.length; i++) {
      objectSum[listOfCat[i]] = 0
  }
  
   
  let numRegex = /[0-9]/
  
  listOfArt.forEach((book) => {
    let letter = book[0]
    let number = Number(book.split('').filter(char => numRegex.test(char) ===true).join(''))
    
      if (letter in objectSum) objectSum[letter] += number
    
  })
  

 let result = []
 let sumArray = Object.entries(objectSum)
 
 for(let i = 0; i < sumArray.length; i++) {
   
   result.push(`(${sumArray[i][0]} : ${sumArray[i][1]})`) 
   
 }

  
  return result.join(' - ')
}