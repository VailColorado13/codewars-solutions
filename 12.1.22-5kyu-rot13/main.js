//solution for 5kyu Rot13
//link to Kata: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript



function rot13(message){
    let result = []
    
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i)
    if (charCode <= 64) {result.push(message[i])}//<--- handles codes that are below the range of letters 
    else if (charCode >= 123) {result.push(message[i])} //<--- handles codes that are above the range of letters 
    else if (charCode > 90 && charCode < 97) {result.push(message[i])} //<--- handles codes that are in between the range of letters 
    
    else {
    let rot13 = charCode + 13
    if (rot13 > 64 && rot13 < 91) {result.push(String.fromCharCode(rot13))} //<--- handles uppercase letters within alphabet range  
    else if (charCode > 64 && charCode < 91 && rot13 > 90) {result.push(String.fromCharCode(rot13 -26))} //<--- handles uppercase letters outside alphabet range 
    else if (rot13 > 96 && rot13 < 123) {result.push(String.fromCharCode(rot13))} //<--- handles lowercase letters within alphabet range    
    else if (charCode > 96 && charCode < 123 && rot13 > 122) {result.push(String.fromCharCode(rot13 -26))} //<--- handles lowercase letters within alphabet range
    }
   }
    
   
    return result.join('')
  
  
  }