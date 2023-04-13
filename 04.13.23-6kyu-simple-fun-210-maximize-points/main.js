//solution for 6kyu Simple Fun #210: Maximize Points
//Link to kata: https://www.codewars.com/kata/58fec262184b6dc30800000d

function maximizePoints(team1, team2) {
    team1 = team1.sort((a,b) => a -b)
    team2 = team2.sort((a,b) => b - a)
    let points = 0
    
    team1.forEach((player) => {
      
        for (let i = 0; i < team2.length; i++) {
          if (team2[i] < player) {
            points++
            team2.splice(i, 1)
            break
          }
        }   
    }) 
 
    return points
  }