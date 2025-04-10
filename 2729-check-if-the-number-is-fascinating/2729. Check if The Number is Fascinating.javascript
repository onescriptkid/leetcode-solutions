/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
  let left = n*2
  let right = n*3

  let str = `${n}${left}${right}`
  let set = new Set()
  for(let c of str) {
    if(c === "0") return false
    if(set.has(c)) return false
    set.add(c)
  }
  return true
};