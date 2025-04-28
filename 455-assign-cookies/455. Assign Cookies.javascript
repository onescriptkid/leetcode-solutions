/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {

  g.sort((a,b) => a > b ? 1 : -1)
  s.sort((a,b) => a > b ? 1 : -1)

  let content = 0
  let j = 0
  for(let greed of g) {

    while(s[j] < greed && j < s.length) {
      j++
    }

    if(j === s.length) break;

    content++
    j++

  }

  return content

};