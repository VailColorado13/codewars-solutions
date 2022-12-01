//Solution for 4kyu Snail 
//Link to Kata: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript


const snail = function(array) {
    console.log(array)
    
    
      let res = []
    while (array.length >= 1) {
    //1. shift all of the values in arr[0] into the new array. then remove that whole sub array
    
      res.push(array[0])
      array.shift()
      
      if (array.length === 0) break
      
    //2. for loop through the remainder and pop all the final values into the new array

      for (let i = 0; i < array.length; i++) {
        res.push(array[i].pop())
      }
    //3. push the values of arr[arr.length -1] into the new array, reversed. remove that sub array
    
      res.push(array[array.length -1].reverse())
      array.pop()  
      
        if (array.length === 0) break
      
    //4. for loop through all remaining sub arrays backwards and shift all the first values into new array
      
     for (let i = array.length-1; i >= 0; i--) {
        res.push(array[i].shift())
      }
      
    }
    
    return res.flat()
    }
      
   