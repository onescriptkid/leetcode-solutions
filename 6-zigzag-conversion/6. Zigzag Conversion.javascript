/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

  //  01234567890123
  //s=paypalishiring
  //  
  
  //    01234567890123
  //  s=paypalishiring
  // 0  p     i     g
  // 1   a   l h   n
  // 2    y a   i i
  // 3     p     r

  if(numRows === 1) return s

  // 0123456789
  // p y a i h
  //  a p l s i

  let out = []
  let dir = 'down'
  let r=0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    // console.log('c', c, 'd', dir, 'r', r, 'out', out)

    if(out[r] === undefined) {
      out[r] = []
    }
     out[r].push(c)

    if(dir === 'down') {
      r++
    } else {
      r--
    }

    if(r === numRows) {
      dir= 'up'
      r--
      r--
    } if(r === -1) {
      dir = 'down'
      r++
      r++
    }
  }

  let str = ''
  for(let level of out) {
    str+=level.join('')
  }
  return str
    
};