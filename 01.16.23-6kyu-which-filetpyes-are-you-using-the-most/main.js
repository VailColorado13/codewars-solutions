//Solution for 6kyu Which filetypes are you using the most?
//Link to kata: https://www.codewars.com/kata/5c7254fcaccda64d01907710


function solve(files) {
 
    let extensions = files.map((file) => {
      
      const extensionStart = file.lastIndexOf('.')
      return file.substring(extensionStart)
    })
    
  
    let counts = extensions.reduce((obj, count) =>{
      
      if (!obj[count]) obj[count] = 1
      obj[count]++
      return obj
    },{})
    
    let arr = Object.entries(counts)
    let countsArr = Object.values(counts)
    const max = Math.max(...countsArr)
   
    
    let maxOnly = arr.filter((ext) => ext[1] === max)
    
    let result = []
    maxOnly.forEach((max) => result.push(max[0]))
    
    return result.sort()
    
    
  }