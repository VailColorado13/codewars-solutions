//solution for 6kyu New Cashier does not know about space or shift
//link to kata: https://www.codewars.com/kata/5d23d89906f92a00267bb83d/javascript

function getOrder(input) {
    let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
    
    const burgerCount = (input.match(/burger/g) || []).length
    const friesCount =  (input.match(/fries/g) || []).length
    const chickenCount = (input.match(/chicken/g) || []).length
    const pizzaCount = (input.match(/pizza/g) || []).length
    const sandwichCount = (input.match(/sandwich/g) || []).length
    const onionringsCount = (input.match(/onionrings/g) || []).length
    const milkshakeCount = (input.match(/milkshake/g) || []).length
    const cokeCount =  (input.match(/coke/g) || []).length
    
    let orders = []
    
   
    orders.push('Burger '.repeat(burgerCount))
    orders.push('Fries '.repeat(friesCount)) 
    orders.push('Chicken '.repeat(chickenCount)) 
    orders.push('Pizza '.repeat(pizzaCount)) 
    orders.push('Sandwich '.repeat(sandwichCount))
    orders.push('Onionrings '.repeat(onionringsCount))
    orders.push('Milkshake '.repeat(milkshakeCount))
    orders.push('Coke '.repeat(cokeCount))
  
    
   return orders.join('').trim()
}