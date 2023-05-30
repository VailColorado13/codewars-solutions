//Solution for 6 kyu Rainfall 
//Link to Kata: https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/javascript


function mean(town, string) { 
    const data = getData(town, string)
    if (data === false) return -1
    let totalRainfall = data.reduce((pv, cv) => pv + cv)
    return totalRainfall/ 12
}
function variance(town, string) {
   const data = getData(town, string) 
   if (data === false) return -1
   const theMean = mean(town, string)
   
   let squaredDifferences = data.map(dataPoint => (dataPoint - theMean)**2)
   let sumOfSquaredDifferences = squaredDifferences.reduce((pv, cv) => pv + cv) 
   return sumOfSquaredDifferences / 12
}


function getData(town, string) {
    let cities = string.split('\n')
    let cityNames = cities.map(string => string.slice(0, string.indexOf(':'))) 
    let targetCity = cities.filter(string => string.startsWith(town))[0]
     
    if (!cityNames.includes(town)) return false
  
    targetCity = targetCity.slice(targetCity.indexOf(':')+ 1)
    targetCity = targetCity.split(',')
    return targetCity.map(month => Number(month.slice(month.indexOf(' ') + 1)))
}