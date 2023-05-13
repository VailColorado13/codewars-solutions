//Solution for 7 kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe 
//Link to Kata: https://www.codewars.com/kata/582746fa14b3892727000c4f/solutions/javascript

function countDevelopers(list) {
    let count = 0 
     list.forEach((visitor) => {
        if (visitor.continent === 'Europe' && visitor.language === 'JavaScript') count++
      })
    return count 
  }