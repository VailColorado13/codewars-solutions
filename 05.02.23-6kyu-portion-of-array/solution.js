//Solution for 6 kyu Portion of Array 
//Link to Kata: https://www.codewars.com/kata/598e3859f289bb47ba00000a


function portion(a,i,n){
  let ans = []
  if (i < 0) {
      let startingIndex = a.length - 1 + i
      let endingIndex = startingIndex - n
      if (endingIndex < 0) return -1
      else {
        for (let i = startingIndex; i > endingIndex; i--) {
          ans.push(a[i])
        }
      }
    return ans.reverse()
  }
  
  else {
    let startingIndex = i
    let endingIndex = i + n
    if (endingIndex > a.length -1) {return -1}
    else {
      for (let i = startingIndex; i < endingIndex; i++) {
        ans.push(a[i])
      }
    }
    return ans
  } 
}