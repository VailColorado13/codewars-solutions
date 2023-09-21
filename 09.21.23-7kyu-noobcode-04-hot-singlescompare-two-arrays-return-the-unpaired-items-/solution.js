//Solution for 7 kyu noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items ! 
//Link to Kata: https://www.codewars.com/kata/57475353facb0e7431000651/javascript


function hotSingles(arr1, arr2) {
    let arr = arr1.concat(arr2)
    let singles = []
    for (let i = 0; i < arr.length; i++) {
      let score = 0 
      if (arr1.includes(arr[i])) score++
      if (arr2.includes(arr[i])) score--
      
      if (score !== 0 && !singles.includes(arr[i])) singles.push(arr[i])
     }
    
    return singles
    
}