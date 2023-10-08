//Solution for 6 kyu Simple Fun #200: Luxurious House 
//Link to Kata: https://www.codewars.com/kata/58c8af49fd407dea5f000042/solutions/javascript

function luxhouse(houses) {
    let answers = []
    for (let i = 0; i < houses.length; i ++) {
      const toTheRight = Math.max(...houses.slice(i+1), 0)
      if (houses[i] > toTheRight) answers.push(0)
      else answers.push(toTheRight - houses[i] + 1)
    }
   return answers
  }