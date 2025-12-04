/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {


  let content = 0 

  g.sort((a,b) => a > b ? 1 : -1)
  s.sort((a,b) => a > b ? 1 : -1)
  // s 1 1
  //   i
  // g 1 2 3
  //     j

  let i = 0
  let j = 0

  while(i < s.length) {
    let size = s[i]
    let greed = g[j]
    if(size >= greed) {
      content++
      j++
    }
    i++
  }
  return content


};