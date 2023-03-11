//Solution for 7kyu Keypad Horror 
//Link to kata: https://www.codewars.com/kata/5572392fee5b0180480001ae


function computerToPhone(numbers){
    let reso = ''
     const key = {
       7: '1',
       8: '2',
       9: '3',
       4: '4',
       5: '5',
       6: '6',
       1: '7',
       2: '8',
       3: '9',
       0: '0'
     }
     
     numbers.split('').forEach(number => reso += key[number])
     
     return reso
      
}