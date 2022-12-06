//Solution for 7kyu Survive the Attack
//link to Kata: https://www.codewars.com/kata/634d0f7c562caa0016debac5

//PREP
//parameters: two input arrays, defenders and attackers. Arrays will not always be equal in length. 
//The initial attack value will be sum of all of the numbers in each array before any attacks take place
//results: return a Boolean. If the defenders have more survivors at the end than the attackers do, return true. else false 
//example: 
    // attackers: [1, 3, 5, 7]
    // defenders:[2, 4, 6, 8]
        //in this example attackers[0] loses to defenders[0]. defendSurviors++
        //then, attackers[1] loses to defenders[0]. defendSurvivors++
        //continue on. Defenders win the remainder of the battles. 
//pseudoCode: 
    //declare variables defendSurvivors and attackSurvivors; set both to zero
    //determine if either array is longer or shorter than the other. 
      //this accomplishes two things. 
        //1. we'll use this to set the upper limit on our loop
        //2. if one team has more attackers than the other, they automatically start out with longerSide - shorterSide survivors
    //loop throgh the shorter array and determine which array has the larger number at each index. 
      //that team gets ++ on their survivors variable. if the value is the same do nothing. both indexes have died 
    //return: 
      //do both teams have the same number of survivors? if so return true if initialDefensePower >= initialAttackPower
      //else if defendSurvivors > attackSurvivors ? true : false 

      function hasSurvived(attackers, defenders){
  
  
        let defenceSurvivors = 0
        let attackSurvivors = 0 
        let loopLimit
        
        if (attackers.length > defenders.length) {
          loopLimit = defenders.length 
          attackSurvivors += attackers.length - defenders.length 
        }
        
        if (defenders.length > attackers.length) {
          loopLimit = attackers.length 
          defenceSurvivors += defenders.length - attackers.length 
        }
      
        else if (defenders.length === attackers.length) {
          loopLimit = defenders.length 
          }
        
        
        for (let i = 0; i < loopLimit; i++) {
          if (attackers[i] === defenders[i]) continue 
          else if (attackers[i] > defenders[i]) attackSurvivors++ 
          else defenceSurvivors++
        }
        console.log([attackSurvivors, defenceSurvivors])
        
        if (attackSurvivors === defenceSurvivors) {
          let initialAttackPower = attackers.reduce((pv,cv) => pv + cv,0)
          let initialDefensePower = defenders.reduce((pv,cv) => pv + cv,0)
          
          if (initialDefensePower >= initialAttackPower) return true
          else return false 
        }
        else if (attackSurvivors > defenceSurvivors) {
          return false 
        }
        else return true
        
      }
      