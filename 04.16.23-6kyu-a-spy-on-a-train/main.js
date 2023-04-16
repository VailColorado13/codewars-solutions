//Solution for 6kyu Happy Coding: a Spy On the Train
//Link to Kata: https://www.codewars.com/kata/599cf86d01a4108584000064/solutions/javascript

function lengthOfRailway(sounds){
    let distance = 0
    let array = sounds.split('呜呜呜').filter(Boolean)
    console.log(array)
   
    //if index is even => travelling fast
    //if index is odd => travelling slow
    
    
    for (let i = 0; i < array.length; i++) {
      const count = (str) => {
        const re = /哐当/g
        return (str.match(re) || []).length
      }
      
     if (i % 2 === 0) distance += 20*count(array[i])
     else distance += 10*count(array[i])
    }
    
    return distance
  }
