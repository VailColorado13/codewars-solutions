//Solution for 7 kyu Easy wallpaper 
//Link to Kata: https://www.codewars.com/kata/567501aec64b81e252000003/javascript

function wallpaper(l, w, h) {
    if (l === 0) return 'zero'
    if (w === 0) return 'zero'
    if (h === 0) return 'zero'
    
    
    let areaOfLengthWalls = (l*h)*2
    let areaOfWidthWalls = (w*h)*2
    let areaOfWalls = (areaOfLengthWalls + areaOfWidthWalls)*1.15
      
    const areaOfRollInMeters = 0.52*10
    
    
    
    const rollsNeeded = Math.ceil(areaOfWalls / areaOfRollInMeters)
    
    return numbers[rollsNeeded]
    
  }