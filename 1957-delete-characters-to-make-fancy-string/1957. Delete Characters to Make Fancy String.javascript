/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {

  let str = ""
  let count = 0
  let prev
  for(let i = 0; i < s.length; i++) {
    // console.log(str)
    let c = s[i]
    if(count === 0) {
      str+=c
      count++
    } else if(c === prev) {
      count++
      if(count >= 3) {
        //
      } else {
        str+=c
      }
    } else if(c !== prev) {
      count = 1
      str+=c
    }
    prev = c
  }
  return str
};