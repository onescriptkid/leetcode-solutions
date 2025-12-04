/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {

  // alex
  // i
  // aaleex
  // j

  // saeed
  //   i
  // ssaaedd
  //      j

  let i = 0
  let j = 0
  while (i < name.length) {
    // console.log('i', name[i])

    // while(typed[j] !== name[i] && j < typed.length) {
    //   console.log(' j diff', typed[j])
    //   j++
    // }
    // if(typed[i] !== name[j]) {
    //   break
    // }
    let found = false
    while(typed[j] === name[i] && j < typed.length) {
      // console.log(' j same', typed[j])
      found = true
      j++
    }
    if(found === false) {
      return false
    }

    i++
  }

  if(i !== name.length) {
    return false
  }
  return true
    
};