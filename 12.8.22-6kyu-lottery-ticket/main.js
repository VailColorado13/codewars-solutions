//Solution for 6kyu Lottery Ticket 
//Link to Kata: https://www.codewars.com/kata/57f625992f4d53c24200070e

//Parameters: an array of two-value arrays will be the input. Those two values will be letters and a number
  //the second parameter will be an int
//return: "Loser!" if the number of miniwins is smaller than than the second input. else 'Winner!'
//example: With the array [['ABC', 65], ['HGR', 74], ['BYHT', 74]] and the win param of two, we get 'Loser'
  //that is because we only have one mini win (A/65) which is less than the win param, which is two 
//pseudocode: 
  //create place to store the count of winners
  //loop through the array with for loop. 
    //does ticket[index][0] contain String.fromCharCode(ticket[i][1])
      //yes? count++ 
      //no? do nothing. 
  //is count greater than or eqaual to win? 
    //yes? => 'Winner!'
    //no? => 'Loser!'

    function bingo(ticket, win){
        let count = 0   
        for(let i = 0; i < ticket.length; i++) {
          if (ticket[i][0].indexOf(String.fromCharCode(ticket[i][1])) != -1) count++
        }  
        return count >= win ? 'Winner!' : 'Loser!' 
      }