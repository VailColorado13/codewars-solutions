//Solution for 6 kyu IndexOf Array in Array 
//Link to Kata: https://www.codewars.com/kata/5783ef69202c0ee4cb000265

var searchArray = function (arrayToSearch, query) {
 
  if (typeof query !== 'object') {throw new Error('not an array')}
  if (query.length != 2) {throw new Error('wrong length')}
  if (!isTwoD(arrayToSearch)) {throw new Error('not 2D')}
  
  for(let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
      return i
    } 
  }
  return -1

}

function isTwoD (arrayToSearch) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (!Array.isArray(arrayToSearch[i])) {
      return false;
    }
  }
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length !== 2) {
      return false;
    }
  }
  
  return true
  
}