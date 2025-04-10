/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if(s.length !== goal.length) return false

  // abcd   bcad
  // bcad


  // aaab
  // aaac

  // aaa aaa
  let allEqual = true
  let twice = false;
  let set = new Set()
  for(let i = 0; i < s.length; i++) {
    let cs = s[i]
    let cg = goal[i]
    if(cs !== cg) {
      allEqual = false
      break;
    }
    if(set.has(cs)) {
      twice = true
    }
    set.add(cs)
  }
  if(allEqual) {
    if(twice) {
      return true
    } else {
      return false
    }
  }

  let count = 0
  let pcs
  let pcg
  for(let i = 0; i < s.length; i++) {
    let cs = s[i]
    let cg = goal[i]
    if(cs !== cg) {
      count++
      // console.log('cs', cs, 'cg', cg, 'pcs', pcs, 'pcg', pcg)
      if(pcs !== undefined && pcg !== undefined) {
        if(pcs !== cg || pcg !== cs) {
          return false
        }
      }
      pcs = cs
      pcg = cg
    }
    if(count === 3) {
      return false
    }
  }
  if(count === 1) return false
  return true

};