/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {

  let [hh,mm] = s.split(':')
  let [h1, h2] = hh.split('')
  let [m1, m2] = mm.split('')
  console.log(s)

  //12:09
  if(m2 === "?") {
    m2 = "9"
  }
  if(m1 === "?") {
    m1 = "5"
  }
  // 1?, ?1, ?9, 0?
  if(h1 === "1" && h2 === '?') {
    h2 = "?"
  }
  if(h1 === "?" && h2 === "?") {
    h1 = "1"
    h2 = "1"
  }
  // ?1, ?9
  if(h1 === "?") {
    if(h2 === "0" || h2 === "1") {
      h1 = "1"
    } else {
      h1 = "0"
    }
  }
  // 1?, 0?
  if(h2 === "?") {
    if(h1 === "1") {
      h2 = "1"
    } else {
      h2 = "9"
    }
  }

  return h1 + h2 + ":" + m1 + m2
};