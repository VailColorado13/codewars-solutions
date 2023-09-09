//Solution for 6 kyu Add All 
//Link to Kata: https://www.codewars.com/kata/5b7d7ce57a0c9d86c700014b

function addAll(numbers) {
    let cost = 0 
    
    while (numbers.length >= 2) {
      numbers = numbers.sort((a,b) => a - b)
      let newCost = numbers[0] + numbers[1]
      cost += newCost
      numbers.shift()
      numbers.shift()
      numbers.push(newCost)
      console.log(numbers)
    }
    return cost
    
  }