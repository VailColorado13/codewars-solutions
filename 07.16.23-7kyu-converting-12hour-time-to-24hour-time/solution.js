//Solution for 7 kyu Converting 12-hour time to 24-hour time 
//Link to Kata: https://www.codewars.com/kata/59b0a6da44a4b7080300008a/javascript

function to24hourtime(hour, minute, period) {
    if (period === 'am') {
      hour = hour === 12 ? 0 : hour 
      return `${String(hour).padStart(2, '0')}${String(minute).padStart(2, '0')}`
    }
    if (period === 'pm') {
      hour = hour === 12 ? 12 : hour + 12
        return `${String(hour).padStart(2, '0')}${String(minute).padStart(2, '0')}`
    }
  }
  