/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
  let s1even = {}
  let s1odd = {}
  for(let i = 0; i < s1.length; i++) {
    let c = s1[i]
    if(i % 2 === 0) {
      s1even[c] = (s1even[c] || 0) + 1
    } else {
      s1odd[c] = (s1odd[c] || 0) + 1
    }
  }

  let s2even = {}
  let s2odd = {}
  for(let i = 0; i < s2.length; i++) {
    let c = s2[i]
    if(i % 2 === 0) {
      s2even[c] = (s2even[c] || 0) + 1
    } else {
      s2odd[c] = (s2odd[c] || 0) + 1
    }
  }

  for(let key of Object.keys(s1even)) {
    let s1count = s1even[key]
    let s2count = s2even[key]
    if(s1count !== s2count) {
      return false
    }
  }
  for(let key of Object.keys(s2even)) {
    let s1count = s1even[key]
    let s2count = s2even[key]
    if(s1count !== s2count) {
      return false
    }
  }
  for(let key of Object.keys(s1odd)) {
    let s1count = s1odd[key]
    let s2count = s2odd[key]
    if(s1count !== s2count) {
      return false
    }
  }
  for(let key of Object.keys(s2odd)) {
    let s1count = s1odd[key]
    let s2count = s2odd[key]
    if(s1count !== s2count) {
      return false
    }
  }
  return true
};