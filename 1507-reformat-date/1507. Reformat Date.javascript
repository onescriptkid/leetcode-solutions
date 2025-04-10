/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  let [day, month, year] = date.split(' ') 

  // day
  let numbers = new Set('0123456789')
  let daystr = ''
  for(let c of day) {
    if(numbers.has(c)) {
      daystr+=c
    }
  }
  if(daystr.length === 1) {
    daystr = "0" + daystr
  }

  // month
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let monthstr = ''
  for(let i = 0;i <  months.length; i++) {
    if(month === months[i]) {
      monthstr = "" + (i + 1)
    }
  }
  if(monthstr.length === 1) {
    monthstr = "0" + monthstr
  }

  // 
  let yearstr = year


  return `${yearstr}-${monthstr}-${daystr}` 
};