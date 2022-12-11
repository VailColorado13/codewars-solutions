//Solution for 6kyu Highest Rank Number in an Array
//Link to Kata: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

//Parameters: an array of integer
//Return: a single integer
//Example: in te array [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]  we return 12
  //this is because it asks for only the higher number if there is a tie. 
//pseudo code: 
  //Use reduce to create an object of the numbers in the array and their frequencies
  //collapse this into a two dimensional array with Object.entries
  //sort in ascending order based on second value of each pair
  //set a variable Max that logs the max number of occurances by selecting the value at array[0][1]
  //filter out all vaules that are not eqal to Max
  //sort remainder in descending order by first value in pair 
  //return zeroeth index 

  function highestRank(arr){
    let counts = arr.reduce((obj, value) => {
      if (!obj[value]) obj[value] =1
      else obj[value]++
      return obj
    },{})
    
   let deepArr = Object.entries(counts)
   let sortedByCount = deepArr.sort((a,b) => b[1] - a[1])
   let maxCount = sortedByCount[0][1]
   
   let maxOnly = sortedByCount.filter(x => x[1] === maxCount)
   
   let maxOnlySorted = maxOnly.sort((a, b) => Number(b[0]) - Number(a[0]))
   
   return Number(maxOnlySorted[0][0])
   
    
  
  }