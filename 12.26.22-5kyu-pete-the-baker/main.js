//Soultion for 5kyu Pete the Baker
//Link to Kata: https://www.codewars.com/kata/525c65e51bf619685c000059



function cakes(recipe, available) {
  
  let maxDiv = []
  
  for (let ingred in recipe) {
    if (ingred in available) {
     maxDiv.push( Math.floor(available[ingred] / recipe[ingred]))
    }  
    else maxDiv.push(0) 
  }
  return Math.min(...maxDiv)
}