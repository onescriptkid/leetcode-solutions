/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  let [year, month, day] = date.split('-')
  let nmonth = Number(month)
  let nday = Number(day)

  let leap = isLeapYear(year)

  function isLeapYear(year) {
    let nyear = Number(year)

    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0 )

    if(year % 4 === 0) {
      if(year % 100 === 0) {
        if(year % 400 === 0) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }

  let daydays = nday
  //             j  f  m  a  m  j   j  a  s  o  n  d
  let mtod = [0, 31,28,31,30,31,30, 31,31,30,31,30,31]
  let monthdays = 0
  for(let i = 1; i < month; i++) {
    if(leap && i === 2) {
      monthdays+=29
    } else {
      monthdays+=mtod[i]
    }
  }
  // console.log('monthdays', monthdays, 'ddays', nday, monthdays+nday, 'leap', leap )
  return monthdays + nday
};