//solution for 6kyu Emotional Sort 
//Link to kata: https://www.codewars.com/kata/5a86073fb17101e453000258/javascript


function sortEmotions(arr, order){
  
    const value = {
      ':D': 0,
      ':)' : 1,
      ':|' : 2,
      ':(' : 3, 
      'T_T': 4
    }
     
    return order ? arr.sort((a,b) => value[a] - value[b]) : arr.sort((a,b) => value[b] - value[a]) 
    
     
}
