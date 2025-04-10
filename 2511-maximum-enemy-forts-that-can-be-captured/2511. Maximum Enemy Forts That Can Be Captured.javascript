/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {

  // 0 1 2  3 4 5 6 7 8
  // 1 0 0 -1 0 0 0 0 1
  //                  a               
  //        e        
  let a
  let e
  let max = 0
  for(let i = 0; i < forts.length; i++) {
    let fort = forts[i]
    // console.log('i', i, 'fort', fort, 'a', a, 'e', e, 'max', max)

    if (fort === 1) {

      a = i
      if (a !== undefined && e !== undefined) {
        let captured = a - e - 1
        if (captured > max) {
          max = captured
        }
      }
      e = undefined


    } else if(fort === -1) {
      e = i
      if (a !== undefined && e !== undefined) {
        let captured = e - a - 1
        if (captured > max) {
          max = captured
        }
      }
      a = undefined
    }

  }
  return max
};