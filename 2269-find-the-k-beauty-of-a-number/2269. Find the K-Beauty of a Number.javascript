/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {

  let str = "" + num
  let out = 0
  for(let i = 0; i < str.length + 1 - k; i++) {
    let sub = str.substring(i, i + k)
    let subnum = Number(sub)
    console.log(sub, subnum, num / subnum)

    if(subnum !== 0 && num / subnum === Math.floor(num / subnum)) {
      out++
    }
  }
  return out
};