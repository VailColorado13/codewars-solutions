//Solution for 6 kyu Nuclear Missile Manager 
//Link to Kata: https://www.codewars.com/kata/567ed5db4089538eea000010/javascript


function launchAll(launchMissile) {
    for(var i = 0; i < 5; i++) {
      (function(index) {
      setTimeout(function() {
        launchMissile(index);
      }, index * 1000);
    })(i);
  }
}