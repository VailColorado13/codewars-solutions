//Codewars 6kyu Maze Runner Solution
//link to kata: https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript


//------------------------------------------------------------------------------------------------------------------------\

function mazeRunner(maze, directions) {
    let startingPoint
    for(let i = 0; i < maze.length; i++){
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 2) {startingPoint = [i,j]}
      } 
    }
  
   let path = [startingPoint]
   for (let i = 0; i <= directions.length; i++) {
    let currentPosition = path[path.length -1]
      if (directions[i] === 'N')  (path.push([currentPosition[0]-1, currentPosition[1]]))
      if (directions[i] === 'S')  (path.push([currentPosition[0]+1, currentPosition[1]]))
      if (directions[i] === 'E')  (path.push([currentPosition[0], currentPosition[1]+1]))
      if (directions[i] === 'W')  (path.push([currentPosition[0], currentPosition[1]-1]))
  
   }
  
   let result = []
  
  let checkForOffGridNS = []
  
  
  for (let i = 0; i < path.length; i++) {
        if (path[i][0] >= maze.length || path[i][0] < 0) checkForOffGridNS.push(1)
  }
  
  if (checkForOffGridNS.length > 0) {return 'Dead'}
  
  else {
  
   for (let i = 0; i < path.length; i++) {
    result.push(maze[path[i][0]][path[i][1]])
    if (maze[path[i][0]][path[i][1]] === 3) break
   }
    return  result.includes(1) || result.includes(undefined)  ? 'Dead' : !result.includes(3) ? 'Lost' : 'Finish'
   
  }}


function mazeRunner(maze, directions) {
    let startingPoint
    for(let i = 0; i < maze.length; i++){
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 2) {startingPoint = [i,j]}
      } 
    }
  
   let path = [startingPoint]
   for (let i = 0; i <= directions.length; i++) {
    let currentPosition = path[path.length -1]
      if (directions[i] === 'N')  (path.push([currentPosition[0]-1, currentPosition[1]]))
      if (directions[i] === 'S')  (path.push([currentPosition[0]+1, currentPosition[1]]))
      if (directions[i] === 'E')  (path.push([currentPosition[0], currentPosition[1]+1]))
      if (directions[i] === 'W')  (path.push([currentPosition[0], currentPosition[1]-1]))
  
   }
  
   let result = []
  
  let checkForOffGridNS = []
  
  
  for (let i = 0; i < path.length; i++) {
        if (path[i][0] >= maze.length || path[i][0] < 0) checkForOffGridNS.push(1)
  }
  
  if (checkForOffGridNS.length > 0) {return 'Dead'}
  
  else {
  
   for (let i = 0; i < path.length; i++) {
    result.push(maze[path[i][0]][path[i][1]])
    if (maze[path[i][0]][path[i][1]] === 3) break
   }
    return  result.includes(1) || result.includes(undefined)  ? 'Dead' : !result.includes(3) ? 'Lost' : 'Finish'
   
  }}