//Solution for 6kyu Word a10n (abbreviation)
//link to kata: https://www.codewars.com/kata/5375f921003bf62192000746/javascript



function abbreviate(string) {
  
    let newStr = string.replace(/\-/g, ' - ')
    let arr = newStr.split(/[\s]/)
    
    console.log(arr)
    
    let punctuationArr = []
    
    
    let punctuation = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~]/g
     
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i].search(punctuation) !== -1) {
        punctuationArr.push(arr[i].charAt(arr[i].search(punctuation)))
        arr[i] = arr[i].replace(punctuation, '')
        
      } else punctuationArr.push("")                                                   
    }
    
      console.log(punctuationArr)
    
    let result = arr.map((word, index) => {
      if (word.length >= 4) {
        return `${word.charAt(0)}${word.length-2}${word.charAt(word.length -1)}${punctuationArr[index]}`      
      }
      else return `${word}${punctuationArr[index]}`
    }).join(' ')
    
  return result.replaceAll(' - ', '-')
  
  }