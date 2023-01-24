//Solution for 6kyu Statistics for an Athletic Association 
// Link to kata: https://www.codewars.com/kata/55b3425df71c1201a800009c/javascript


function stat(strg) {
   
  if (strg === '') {return strg}
  
  
  
  function convertAllToSeconds (stats) {
       stats = stats.split(" ")
       stats = stats.map(string => {
         if (string.charAt(string.length -1) === ",") {
           return string.slice(0, string.length -1)
         }else return string
         })
     
      stats = stats.map(string => string.split('|'))
      
      stats = stats.map(array => {
        const part1 = Number(array[0]) * 3600
        const part2 = Number(array[1]) * 60
        const part3 = Number(array[2])
        
        return [part1, part2, part3].reduce((pv,cv) => pv + cv) 
        
      })
      
      return stats 
    }
  
  
  
  
  
  
  
  function calculateRange (seconds) { 
    return Math.max(...seconds) - Math.min(...seconds)
  }

  
  
  
  
  
  
 function calculateMedian (seconds) {
    
  seconds = seconds.sort((a,b) => a -b)
  
  
  if (seconds.length % 2 === 0) {
    let middleLow = seconds.length/2 -1
    let middleHigh = seconds.length/2
    return (seconds[middleLow] + seconds[middleHigh])/2
  }
  else {
    let middle = Math.floor(seconds.length/2)
    return seconds[middle]
  }
}
  
  
  
  
  
  
  function calculateAverage (seconds) { 
    return seconds.reduce((pv,cv) => pv + cv) / seconds.length 
  }
  

  
  const range = calculateRange(convertAllToSeconds(strg))
  const average = Math.floor(calculateAverage(convertAllToSeconds(strg)))
  const median = Math.floor(calculateMedian(convertAllToSeconds(strg)))
  
  
  
  
 function convertToStats (number) {
  let hours = Math.floor(number / 3600)
  let minutes = Math.floor((number - hours*3600) / 60)
  let seconds = number - (hours*3600) - (minutes*60)   
  
  
  hours =  String(hours).padStart(2, '0')
  minutes =  String(minutes).padStart(2, '0')
  seconds = String(seconds).padStart(2, '0')

  return [hours, minutes, seconds].join('|')
}
  
  
  return `Range: ${convertToStats(range)} Average: ${convertToStats(average)} Median: ${convertToStats(median)}`
  
 
  
  
}
