//Solution for 6kyu Free Pizza 
//Link to Kata: https://www.codewars.com/kata/595910299197d929a10005ae/javascript


function pizzaRewards(customers, minOrders, minPrice) {
   
    let winners = []
    
    for (let customer in customers) {
      if (customers[customer].filter(order => order >= minPrice).length >=    minOrders) {
        winners.push(customer)
      }
    }
    return winners 
  }
