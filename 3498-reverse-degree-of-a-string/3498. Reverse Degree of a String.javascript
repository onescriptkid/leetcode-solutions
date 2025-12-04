/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let arr = letters.split('').reverse()
  let ltov = {}
  for(let i = 0; i < letters.length;i++) {
    ltov[arr[i]] = i+1
  }
  let sum = 0
  for(let i = 0; i < s.length; i++) {
    sum+=ltov[s[i]]*(i+1)
  }
  return sum
};