//Solution for 6kyu string breakers 
//Link to kata: https://www.codewars.com/kata/59d398bb86a6fdf100000031/discuss/javascript

function stringBreakers(n, string){
    let result = ''
    string = string.split('').filter(letter => letter !== ' ').join('')
  
    
    for (let i = 0; i < string.length; i++) {
      
 
      if ((i +1) % n === 0 && i !== 0) { 
        result+= string[i]
        result+= '\n'
        }else result += string[i]
    }
   
    if (result.endsWith('\n')) {
      return result.substring(0, result.length -1)
    }
    
    return result
    

}