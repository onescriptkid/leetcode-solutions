/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {


  g.sort((a,b) => a > b ? 1 : -1)
  s.sort((a,b) => a > b ? 1 : -1)

  // 1 2 3      1 1
  // i          j

  let i = 0
  let j = 0
  let out = 0
  while( i < g.length && j < s.length) {
    let greed = g[i]
    let size = s[j]

    if(size >= greed) {
      out++
      i++
      j++
    } else {
      j++
    }
  }
  return out

};