//Solution for Codewars 6kyu String Array Duplicates
//link to kata: https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript



function dup(s) {
  
    let deepArr = s.map(word => word.split(''))
    let res = []
  
    for (let i = 0; i < deepArr.length; i++) {
        res.push(deepArr[i].filter((value,index) => value != deepArr[i][index +1]))
    }
    return res.map(word => word.join(''))
  }