/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  s = s.toLowerCase()
  let alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789')

  let str = ""
  for(let c of s) {
    if(alphanumeric.has(c)) str+=c
  }

  let l = 0
  let r = str.length - 1
  while(l < r) {
    if(str[l] !== str[r]) return false
    l++
    r--
  }
  return true

};