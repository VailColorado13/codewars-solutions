//Solution for 4 kyu Path Finder #1: can you reach the exit? 
//Link to Kata: https://www.codewars.com/kata/5765870e190b1472ec0022a2/javascript


function findMinSteps(maze) {
  const N = maze.length //declare a variiable that is equal to the length of the array. We'll use this later to determine if possibilities are out of bounds and to determine if we've reached the end of the maze
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] //declare a variable that keeps track of the NSEW directions. we'll use this when we want to go in and test the possible next steps at each given point in the graph 
  const queue = [] // set up an empty array as a queue. We'll use this to determine which squares to explore next, and it will also serve to trigger the while loop exiting when there are no more possibilities to explore.
  const visited = new Set() //we'll use a set to store the 'coordinates of the squares that we have explored. Later, we'll use this so we don't go exploring on the same square twice 
  queue.push([0, 0])//we'll stat at position 0,0. We'll also add this to our set. 
  visited.add("0,0") 
  let distance = 0 //we need a variable to keep track of our distance travelled so far. Each time we explore a new square, we'll distance++
  while (queue.length > 0) { //while there is still a new square to be explored, the queue will not be empty. this is because we'll continue to add new squares to the queue
    const size = queue.length //we'll use the variable 'size'  to make it so that we test every queued up square in the next for loop 
    for (let i = 0; i < size; i++) {
      const pos = queue.shift() // by using queue.shift() we are both removing the next up from the queue and we are asigning the pos varaible a value 
            if (pos[0] === N - 1 && pos[1] === N - 1) { //is that value the exit? Y: return the distance - this is the shortest possible distance because it will be the first time we have reached the exit. N: continue
              return distance
            }
                      for (const dir of directions) { //now, we're going to loop over each of the 4 cardinal directions and check to see what's up. Maybe we'll add them to the queue. Maybe we'll ignore them because they are out of bounds. who knows 
                        const new_pos = [pos[0] + dir[0], pos[1] + dir[1]] //this new position varaible ill be assigned 4 times for each time that the loop runs. 
                        const key = new_pos.join(",") // make a key to keep track in our set
                        if ( // ask some questions... is the new position in bounds, can we travel there (aka - is it NOT a wall?), also have we already explored it?  
                          new_pos[0] >= 0 && new_pos[0] < N &&
                          new_pos[1] >= 0 && new_pos[1] < N &&
                          maze[new_pos[0]][new_pos[1]] !== "W" &&
                          !visited.has(key)
                        ) { // if the new position is in bounds, AND is a dot, AND we havent already travelled there, lets do the following: 
                          queue.push(new_pos) // add it to the queue
                          visited.add(key) // mark that we have visited it in the visited set 
                          }
                          //now we're done exploring any possible squares we could have explored based on what ever square we were exploring. 
                          //the for loop (line 11), will continue with any other squares that were queued up in the last iteration of the while loop.
                        }
    }
    distance++//each time the while loop executes, we add 1 to the distance. This is because even if we explore 4 new squares within one execution of the while loop. We will still only have travelled one square away from the previous square
  }
  return false;
}