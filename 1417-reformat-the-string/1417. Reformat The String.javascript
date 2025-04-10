/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {

  let numset = new Set('01234567890'.split(''))

  let lets = []
  let nums = []


  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(numset.has(c)) {
      nums.push(c)
    } else {
      lets.push(c)
    }
  }

  // abbb 00
  // ab   0000
  // console.log(lets, nums)
  if(nums.length > lets.length && lets.length + 1 < nums.length ) {
    return ""
  }
  if(lets.length > nums.length && nums.length + 1 < lets.length) {
    return ""
  }

  let longer = nums.length > lets.length ? nums : lets
  let shorter = nums.length > lets.length ? lets : nums

  let out = ""
  for(let i = 0; i < longer.length; i++) {
    let c = longer[i]
    let oc = shorter[i]
    if(oc !== undefined) {
      out = out+ c + oc
    } else {
      out = out + c
    }
  }
  return out
};