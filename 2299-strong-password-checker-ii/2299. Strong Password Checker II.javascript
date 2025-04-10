/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  if(password.length < 8) {
    return false
  } 

  let upper = false
  let lower = false
  let digit = false
  let special = false

  let digits = new Set('0123456789')
  let lowers = new Set('abcdefghijklmnopqrstuvwxyz')
  let uppers = new Set('abcdefghijklmnopqrstuvwxyz'.toUpperCase())
  let specials = new Set('!@#$%*^&+()-+')

  let prev;
  for(let c of password) {
    if(digits.has(c)) {
      digit = true
    }  
    if(lowers.has(c)) {
      lower = true
    }
    if(uppers.has(c)) {
      upper = true
    }
    if(specials.has(c)) {
      special = true
    }
    if(prev === c) {
      return false
    }
    prev = c
  }

  return upper && lower && digit && special

};