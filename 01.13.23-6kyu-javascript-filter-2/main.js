//Solution for 6kyu javascript filter 
//Link to kata: https://www.codewars.com/kata/5262fa26875ed24a3e000029/javascript



function roomMates( rooms, floor ){

    let targetFloor = rooms.filter((room, index) =>   index >= (floor-1)*6 && index < floor*6)
    return targetFloor.filter(room => room !== '')
  
    
    
  }