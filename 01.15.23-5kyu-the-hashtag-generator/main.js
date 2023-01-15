//Solution for 5kyu The Hashtag Generator
//Link to Kata: https://www.codewars.com/kata/52449b062fb80683ec000024/javascript


function generateHashtag (str) {
  
    if (str.length === 0) return false
    
    str = str.replace(/\s\s+/, ' ').trim().split(' ')
      .filter(word => word.length > 0)
    
    
    if (str.length === 0) return false
      
      str = str.map(word => word[0].toUpperCase() + word.substring(1)).join('')
    
    let answer = `#${str}`
    
    return answer.length > 140 ? false : answer
   
}