/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // 1
  let astr = ''
  let leadingw = true
  for(let c of s) {
    if(c === ' ' && leadingw) continue
    if(c !== ' ') leadingw = false
    astr+=c
  }   

  // 2
  let pos = true
  let start = 0
  if(astr[0] === '-') {
    pos = false
    start = 1
  }
  if(astr[0] === '+') {
    start = 1
  }

  // 3
  let numbers = new Set('0123456789')
  let num = 0
  let leadingz = true
  for(let i = start; i < astr.length; i++) {
    let c = astr[i]
    if(c === '0' && leadingz) continue
    if(c !== '0') leadingz = false

    if(!numbers.has(c)) break;

    num = num*10 + Number(c)
  }
  if(pos === false) num = -num

  // 4
  if(num < -(2**31)) num = -(2**31)
  if(num > 2**31-1) num = 2**31-1

  return num 
};