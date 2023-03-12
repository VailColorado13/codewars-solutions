//Solution for 7kyu Sort and Transform 
//Link to kata: https://www.codewars.com/kata/57cc847e58a06b1492000264/javascript



function sortTransform(a){
  
  
  function firstWord(a) {
    const first = String.fromCharCode(a[0])
    const second = String.fromCharCode(a[1])
    const third = String.fromCharCode(a[a.length -2])
    const fourth = String.fromCharCode(a[a.length -1])
    
    return first + second + third + fourth
    
  }
  
  function secondWord(a) {
  a = a.sort((a,b) => a-b)
    
    const first = String.fromCharCode(a[0])
    const second = String.fromCharCode(a[1])
    const third = String.fromCharCode(a[a.length -2])
    const fourth = String.fromCharCode(a[a.length -1])
    
    return first + second + third + fourth
  }
  
  
    function thirdWord(a) {
    a = a.sort((a,b) => b-a)
    
    const first = String.fromCharCode(a[0])
    const second = String.fromCharCode(a[1])
    const third = String.fromCharCode(a[a.length -2])
    const fourth = String.fromCharCode(a[a.length -1])
    
    return first + second + third + fourth
  }
  
  
  
  function fourthWord(a) {
    
    a = a.map(code => String.fromCharCode(code)).sort()
    console.log(a)
    
    const first = a[0]
    const second = a[1]
    const third = a[a.length -2]
    const fourth = a[a.length -1]
    
    return first + second + third + fourth

    
  }

  return [firstWord(a), secondWord(a), thirdWord(a), fourthWord(a)].join('-')  

}