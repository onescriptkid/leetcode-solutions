/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

  // 3
  // 1 2 3
  // 8 9 4
  // 7 6 5   

  // 1->2->3
  //       v
  // 8->9  4
  // ^     v
  // 7<-6<-5   
  //   0 1 1
  // 0 1 2 3
  // 1 0 0 4
  // 2 7 6 5

  let out = new Array(n).fill(0).map(v => new Array(n).fill(0))

  // console.log('out', out)
  let end = n ** 2
  let rows = n
  let cols = n 
  let i = 1
  let r = 0
  let c = 0
  while (i <= end) {
    // console.log('r',i, 'r c', r, c,'-', out)
    while(peek(r, c)) {
      out[r][c] = i
      c = c+1
      i++
    }
    c = c-1
    r = r+1

    // console.log('d',i, 'r c', r, c,'-', out)
    while(peek(r, c)) {
      out[r][c] = i
      r=r+1
      i++
    }
    r = r-1
    c= c-1

    // console.log('l',i, 'r c', r, c,'-', out)
    while(peek(r, c)) {
      out[r][c] = i
      c = c-1
      i++
    }
    c = c+1
    r = r-1

    // console.log('u',i, 'r c', r, c,'-', out)
    while(peek(r, c)) {
      out[r][c] = i
      r = r-1
      i++
    }
    r = r+1
    c = c+1
  }
  function peek(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) {
      return false
    }
    if(out[r][c] !== 0) {
      return false
    }
    return true
  }
  return out
};