//Solution for 7kyu volume of the largest cube that fits inside a given cylinder
//link to kata: https://www.codewars.com/kata/581e09652228a337c20001ac

function cubeVolume(h, r) {
    let s = r*Math.SQRT2
    
    let ifHeight = h**3
    let ifRadius = s**3
    
    return Math.min(ifHeight, ifRadius)
  }