//Solution for codewars 6kyu Delete occurrences of an element if it occurs more than n times
//link to kata: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript


function deleteNth(arr,n){
      let maxCountsObj = arr.reduce((obj, value) => {
        if (!obj[value]) obj[value] = n
        return obj
        },{})
    
    
      let maxCounts = Object.entries(maxCountsObj)
        
      for (let i = 0; i < maxCounts.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] == maxCounts[i][0] && maxCounts[i][1] === 0) {
            arr[j] = '&'
          }
          else if (arr[j] == maxCounts[i][0] && maxCounts[i][1] > 0) {maxCounts[i][1]--}
        }
      
      }
     return arr.filter(x => x !== '&')
    
    }