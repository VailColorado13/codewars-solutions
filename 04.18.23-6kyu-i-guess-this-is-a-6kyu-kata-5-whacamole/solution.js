//Solution for 6 kyu I guess this is a 6kyu kata #5: Whac-A-Mole 
//Link to Kata: https://www.codewars.com/kata/57d250e55dc38e288c000081/javascript


function whacAMole(arr){
    let flat = []
    
    arr.forEach(subArr => {
      subArr.forEach((number) => flat.push(number))
    })
    
    flat = flat.sort((a,b) => a -b)
    
    let totalSeconds = Math.max(...flat)
    let whacked = []
    
    while (totalSeconds !== 0 && flat.length) {
      whacked.push(flat.shift())
      whacked.push(flat.shift())
      
      
      flat = flat.map(remaining => remaining -1)
      flat = flat.filter(remaining => remaining > 0)
      
      
      totalSeconds--
    }
    
    
    return whacked.filter(mole => mole !== undefined).length
   
  }