//Solution for 7kyu between extremes 
//Link to kata: https://www.codewars.com/kata/56d19b2ac05aed1a20000430/javascript



function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
}