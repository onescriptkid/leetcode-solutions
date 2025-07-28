/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {



//     const days1 = calculateDays(date1)
//     const days2 = calculateDays(date2)
    
//     return Math.abs(days1 - days2)


// function calculateDays(date) {
//     const [y, m, d] = date.split("-")
    
//     const yearDays = calculateDaysUpToYears(parseInt(y))
//     const monthDays = calculateDaysUpToMonths(parseInt(m), parseInt(y))
//     const dayDays = parseInt(d)
    
//     const days = yearDays + monthDays + dayDays
//     console.log('date', date, dayDays, monthDays, yearDays)
    
//     return days
// }

// function calculateDaysUpToYears(year) {
//     let days = 0
    
//     for (let i = 1971; i < year; i++) {
//         days += (isLeapYear(i)) ? 366 : 365
//     }
    
//     return days
// }

// function isLeapYear(year) {
//     return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
// }

// function calculateDaysUpToMonths(month, year) {
//     const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 is to take care of the month offset
//     let days = 0
    
//     for (let i = 1; i < month; i++) {
//         days += months[i]
//     }
    
//     if (month > 2 && isLeapYear(year)) {
//         days += 1
//     }
    
//     return days
// }

  function isLeapYear(year) {

    // return     (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);

    if(year % 4 ===0) {
      if(year % 100 === 0 && year  % 400 !== 0) {
        return false
      }
      return true
    }
    return false
  }

  function getDays(date) {
    let [y,m,d] = date.split('-')


    let years = Number(y)
    let months = Number(m)
    let days = Number(d)

    // months
    let dayspermonth = [31,28,31,30,31,30, 31,31,30,31,30,31 ]
    let monthdays = 0
    for(let i = 0; i < months-1; i++) {
      if(isLeapYear(years) && i === 1) {
        console.log('md', monthdays, 'i', i)
        monthdays+=dayspermonth[i]+1
      } else {
        monthdays+=dayspermonth[i]
      }
    }

    // years
    let yeardays = 0
    for(let i = 1971; i <years;i++) {
      if(isLeapYear(i)) {
        yeardays+=366
      } else {
        yeardays+=365
      }
    }

    // console.log('date', date, days, monthdays, yeardays)
    //

    let total = days + monthdays + yeardays

    return total
  }

  return Math.abs(getDays(date1) - getDays(date2))
};