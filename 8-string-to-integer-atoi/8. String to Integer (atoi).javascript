/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   // leading whitespace
  let fmt = ""
  let j = 0
  while(j < s.length) {
    if(s[j] !== " ") break;
    j++
  }
  // console.log('j', j)
  fmt = s.substring(j)

  // for (let c of s) {
    // if (c === ' ') continue
    // fmt += c
  // } 

  // signedness
  let neg = false
  let sign = false
  if(fmt[0] === '-') {
    neg = true
    sign = true
  } else if(fmt[0] === "+") {
    sign = true
  }

  // skip leading 0s
  let i = 0
  if(sign) i++
  while(fmt[i] === '0') {
    i++
  }
  console.log('fmt', fmt)
  let nodigit = true
  let out = 0
  let digitset = new Set('0123456789')
  while(i < fmt.length) {
    let numstr = fmt[i]
    let num =  Number(numstr)
    if(!digitset.has(numstr)) break;
    if(Number.isNaN(num)) break;
    nodigit = false
    out = out * 10 + num
    i++
  }
  console.log('out', out)
  if(nodigit) return 0
  // apply sign
  if(neg) {
    out = -out
  }

  // out is too large or too small for an int
  if(out < -(2 ** 31)) {
    out = -(2**31)
  } else if(out > (2 ** 31 -1) )  {
    out = 2**31 -1
  }


  return out

  // 11111111 11111111 11111111 11111111
  // ^ sign


};