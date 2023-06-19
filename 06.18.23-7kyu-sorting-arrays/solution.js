//Solution for 7 kyu Sorting Arrays 
//Link to Kata: https://www.codewars.com/kata/57fe864854685b1c420002e0/javascript

function sortArray(a1, a2) {
    let a3 = []
    a1 = a1.map(word => word[0])
    
    
    a2.forEach((word) => {
      const order = a1.indexOf(word[0])
      a3.push([word, order])
    })
   
    a3.sort((a, b) => {
      return a[1] - b[1]
    })
    
   return a3.map(array => array[0])
    
  }