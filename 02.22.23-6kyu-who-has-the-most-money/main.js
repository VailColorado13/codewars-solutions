//Solution for 6kyu who has the most money? 
//Link to kata: https://www.codewars.com/kata/528d36d7cc451cd7e4000339

function mostMoney(students) {
  
    let max = 0 
  
    for (let i = 0; i < students.length; i++) {
      let temp = 0 
      
      temp += students[i].fives * 5
      temp += students[i].tens * 10
      temp += students[i].twenties * 20
      
      max = Math.max(temp, max)
      
      students[i].total = temp
    } 
    
    let mostMoney = students.filter(student => student.total === max)
    
   return mostMoney.length === 1 ? mostMoney[0].name : 'all'
    
}
