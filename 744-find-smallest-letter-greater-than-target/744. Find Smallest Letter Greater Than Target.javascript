/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let l = 0
  let r = letters.length - 1
  // c f j
  // 0 1 2   1
  // l   r   m
  let small;
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = letters[m]
    // console.log(mid, l, m ,r, target)
    if(mid === target) {
      l = m + 1
    }
    if(mid < target) {
      l = m + 1
    }
    if(mid > target) {
      // console.log('small')
      small = mid
      r = m - 1
    }
  }
  if(small === undefined) {
    // console.log('first')
    return letters[0]
  }
  // console.log('return small')
  return small
};