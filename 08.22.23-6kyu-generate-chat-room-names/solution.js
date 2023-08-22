//Solution for 6 kyu Generate Chat Room Names 
//Link to Kata: https://www.codewars.com/kata/64d9f8b2dd14d200247b8184/javascript


function generateChatRoomNames(users) {
  users = users.map(fullName => {
    fullName = fullName.split(' ')
    return fullName.map(name => {
      name = name.toLowerCase()
      return `${name[0].toUpperCase()}${name.substring(1)}`
    })
  })
  
  let firstNames = users.reduce((obj, fullName) => {
    if (!obj[fullName[0]]) obj[fullName[0]] = [fullName[1]]
    else obj[fullName[0]].push(fullName[1])
    return obj
  },{})
  
 let userNames = [] 
 for (name in firstNames) {
   if (firstNames[name].length === 1) {userNames.push(`${name}`)}
   if (firstNames[name].length > 1) {
     let lettersCount = firstNames[name].map(lastNames => lastNames[0]).reduce((obj, lastName) => {
       const firstLetter = lastName[0]
       if (!obj[firstLetter]) {obj[firstLetter] = 1}
       else obj[firstLetter]++
       return obj
     },{})
     
     for (let i = 0; i < firstNames[name].length; i++) {
       const firstLetter = firstNames[name][i][0]
       if (lettersCount[firstLetter] > 1) {
         userNames.push(`${name} ${firstNames[name][i]}`)
       }
       else {
         userNames.push(`${name} ${firstNames[name][i][0]}`)
       }
     }
   }
 }
  return userNames.sort()
  
}