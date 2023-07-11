//Solution for 7 kyu How many urinals are free? 
//Link to Kata: https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4

function getFreeUrinals(urinals){
  
    if (urinals.search('11') !== -1) return -1 
     
     urinals = urinals.split('')
     urinals.push('8')
     urinals.unshift('8')
     
     let place = 1 
     let free = 0
     
     while (place < urinals.length) {
       
       if (urinals[place] === '0') {
         let leftEmpty = urinals[place - 1] !== '1'
         let rightEmpty = urinals[place + 1] !== '1'
         
         if (leftEmpty && rightEmpty) {
           urinals.splice(place, 1, '1')
           free++
         }
       }
       console.log(urinals)
       place++ 
     }
    
     return free
     
   }