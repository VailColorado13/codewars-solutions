//Solution for 4 kyu Sum of Intervals 
//Link to Kata: https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals)
  let noOverlaps = [intervals.shift()]
  
  for (let i = 0; i < intervals.length; i++) {
    const startOfLastInterval = noOverlaps[noOverlaps.length -1][0]
    const endOfLastInterval = noOverlaps[noOverlaps.length -1][1]
    const startOfNextInterval = intervals[i][0]
    const endOfNextInterval = intervals[i][1]

    if (endOfLastInterval > endOfNextInterval) {
      continue
    }

    else if (startOfNextInterval < endOfLastInterval) {
      noOverlaps.pop()
      noOverlaps.push([startOfLastInterval,endOfNextInterval])
    } 
   
    
    else {noOverlaps.push(intervals[i])}
  }
  let ranges = noOverlaps.map(interval => interval[1] - interval[0])
 
  return ranges.reduce((pv, cv) => pv + cv)
  
}