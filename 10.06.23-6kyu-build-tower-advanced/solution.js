//Solution for 6 kyu Build Tower Advanced 
//Link to Kata: https://www.codewars.com/kata/57675f3dedc6f728ee000256/javascript

function towerBuilder(nFloors, nBlockSz) {
    //determine the length of the bottom layer
    const bottomLayerLength =  nBlockSz[0] + (nBlockSz[0] *2)*(nFloors -1) 
    let spaces = 0 
    let tower = []
    
    for (let i = 0; i < nFloors; i++) {
      for (let j = 0; j < nBlockSz[1]; j++) {
        tower.unshift(`${' '.repeat(spaces)}${'*'.repeat(bottomLayerLength -spaces - spaces)}${' '.repeat(spaces)}`)
      }
      spaces += nBlockSz[0]
    }
    
    return tower
  }