/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // 1 remove whitespace 
  let str = ''
  let leadingw = true
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && leadingw) continue
    leadingw = false
    str += s[i]
  }

  // 2 signedness
  let neg = false
  if (str[0] === '-') {
    neg = true
  }

  // 3 read left to right
  let out = 0
  let numbers = new Set('0123456789')
  let leading = true
  let start = 0
  if(str[0] === '-' || str[0] === '+') start = 1

  for (let i = start; i < str.length; i++) {
    let c = str[i]

    // leading zeros
    if(leading) {
      if(c === '0') continue  
    }
    leading = false

    // non-digit character
    if(!numbers.has(c)) {
      break;
    }

    // accumulate digits
    let num = Number(c)
    out = out*10 + num
  }

  // Apply sign
  if(neg) out = -out

  // Rounding
  if(out < -(2**31)) out = -(2**31) 
  if(out > 2**31-1) out = 2**31-1

  return out

};