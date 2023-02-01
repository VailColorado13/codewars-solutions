//Solution for 7kyu The unknown but known variables: Addition
//link to kata: https://www.codewars.com/kata/5716955a794d3013d00013f9/solutions/javascript


function theVar(theVariables) {
    
    const split = theVariables.split('+')
    
    const first = split[0]
    const second = split[1]
    const alphabet = '_abcdefghijklmnopqrstuvwxyz'
  
    return alphabet.indexOf(first) + alphabet.indexOf(second)
    
    
}