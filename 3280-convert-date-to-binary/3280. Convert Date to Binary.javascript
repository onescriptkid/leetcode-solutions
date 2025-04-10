/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {

  let [year, month, day] = date.split('-')

  let nyear = Number(year)
  let nmonth = Number(month)
  let nday = Number(day)
  // 8421    13
  // 1101

  // 13 % 2 => 1   13 / 2 => 6.5 => 6 
  // 6  % 2 => 0   6  / 2 => 3   => 3

  function toBinary(num) {
    let str = ""
    while(num > 0) {
      let digit = num % 2
      str = digit + str
      num = Math.floor(num / 2)
    }
    if(str === "") {
      str = "0"
    }
    return str
  }

  // return toBinary(nyear) + "-" + toBinary(nmonth) + "-" + toBinary(nday)
  return `${nyear.toString(2)}-${nmonth.toString(2)}-${nday.toString(2)}`
};