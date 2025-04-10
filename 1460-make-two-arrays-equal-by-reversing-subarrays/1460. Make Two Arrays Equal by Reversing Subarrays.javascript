/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {

  let tcounts = {}

  for(let i = 0; i < target.length; i++) {
    let num = target[i]
    if(tcounts[num] === undefined) {
      tcounts[num] = 1
    } else {
      tcounts[num]++
    }
  }
  let acounts = {}
  for(let j = 0; j < arr.length; j++) {
    let num = arr[j]
    if(acounts[num] === undefined) {
      acounts[num] = 1
    } else {
      acounts[num]++
    }
  }

  for(let key of Object.keys(tcounts)) {
    if(tcounts[key] !== acounts[key]) {
      return false
    }
  }
  for(let key of Object.keys(acounts)) {
    if(acounts[key] !== tcounts[key]) {
      return false
    }
  }
  return true

};