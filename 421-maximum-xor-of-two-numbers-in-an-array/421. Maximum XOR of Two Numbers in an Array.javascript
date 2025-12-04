/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let maxxor = 0
  let mask = 0

  for(let i = 31; i >= 0; i--) {
    mask = (mask | i << 1)
    let prefixes = new Set()

    for(let num of nums) {
      prefixes.add(num & mask)
    }

    let tmp = maxxor | (1 << i)
    let found = false
    for(let prefix of prefixes) {
      if(prefixes.has(prefix ^ tmp)) {
        found = true
        break;
      }
    }
    if(found) maxxor = tmp
  }  
  return maxxor
};