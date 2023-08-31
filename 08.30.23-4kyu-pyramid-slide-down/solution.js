//Solution for 4 kyu Pyramid Slide Down 
//Link to Kata: https://www.codewars.com/kata/551f23362ff852e2ab000037

function longestSlideDown (pyramid) {
  
    if (pyramid.length === 1) return pyramid[0][0]
    
    pyramid[pyramid.length -2] = pyramid[pyramid.length -2].map((number,index) => {
      let option1 = number + pyramid[pyramid.length -1][index]
      let option2 = number + pyramid[pyramid.length -1][index + 1]
      
      return Math.max(option1, option2)
  
    })
    
    pyramid.pop()
    
    return longestSlideDown(pyramid)
  }