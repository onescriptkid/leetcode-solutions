/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if(s1.length > s2.length) return false

  // eidbaoooo
  // ab
  //  
  // initialize count s1
  let s1counts = {}
  for(let i = 0; i < s1.length; i++) {
    let c = s1[i]
    if(s1counts[c] === undefined) {
      s1counts[c] = 1
    } else {
      s1counts[c]++
    }
  }
  // initialize window s2
  let s2counts = {}
  for(let i = 0; i < s1.length; i++) {
    let c = s2[i]
    if(s2counts[c] === undefined) {
      s2counts[c] = 1
    } else {
      s2counts[c]++
    }
  }
  // {e:1, i:1}

  // walk window through s2
  function compare(s1counts, s2counts) {
    let s1chars = Object.keys(s1counts)
    let s2chars = Object.keys(s2counts)
    let hasPerm = true
    for(let char of s1chars) {
      let s2count = s2counts[char]
      let s1count = s1counts[char]
      if(s2count !== s1count) {
        hasPerm = false
      }
    }
    if(hasPerm) {
      return true
    }
  }
  
  if(compare(s1counts, s2counts)) {
    // console.log('s1counts', s1counts, 's2counts', s2counts)
    return true
  }

  // {a:1, b:1}
  // eidbaooo 8 -2
  // ab
  // 012
  // 01234567
  //      x

  for(let i = 0; i < s2.length-s1.length;i++) {
    // console.log('s2counts', s2counts)
    let r = s1.length+i
    let l = i
    let left = s2[l]
    let right = s2[r]

    s2counts[left]--
    if(s2counts[right] === undefined) {
      s2counts[right] = 0
    }
    s2counts[right]++

    // compare
    if(compare(s1counts, s2counts)) {
      return true
    }

  }
  return false
};