//Solution for 6 kyu Finding the incorrect value in a Binary Tree 
//Link to Kata:  https://www.codewars.com/kata/63f13a354a828b0041979359/javascript

function findIncorrectValue(tree) {
  let leftNodeIndex = 1
  let rightNodeIndex = 2 
  let problems = []
  let indexOfFirstLeaf = tree.length - Math.ceil(tree.length /2)
  let stop = Math.ceil(tree.length /2) -1
  

  
  for (let i = 0; i < stop; i++) {
    if (tree[i] != tree[leftNodeIndex +i] + tree[rightNodeIndex + i])
    problems.push([i, leftNodeIndex +i, rightNodeIndex + i])
    
    leftNodeIndex++
    rightNodeIndex++        
  }

  
 if (problems.length > 1) {
  
  let problemIndex = problems.reduce((prev, curr) => prev.filter(num => curr.includes(num)))
  problemIndex = problemIndex[0]
   return [problemIndex ,    tree[problems[1][1]]  + tree[problems[1][2]]   ]
 }
  
  
  
 else if (problems[0][1] >= indexOfFirstLeaf) {
   problems = problems[0]
   return [problems[2]  , tree[problems[0]] - tree[problems[1]]  ]
 }

else { 
  problems = problems[0]
  return [problems[0] , tree[problems[1]] + tree[problems[2]]]

 }

}