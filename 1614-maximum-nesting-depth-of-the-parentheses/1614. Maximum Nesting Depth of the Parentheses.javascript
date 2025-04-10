/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {

  let curr = 0
  let max;
  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    if (c === '(') {
      curr++
    }
    if(c === ')') {
      curr--
    }

    if (max === undefined) {
      max = curr
    } else if (max < curr) {
      max = curr
    }
  }
  return max
};