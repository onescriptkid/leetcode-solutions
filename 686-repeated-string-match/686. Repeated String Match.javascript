/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  let min = Math.ceil(b.length / a.length)

  let str = a.repeat(min)
  if(str.includes(b)) return min

  str+=a
  if(str.includes(b)) return min + 1


  return -1
};