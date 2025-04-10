/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {

  let [start1, end1] = event1
  let [s1hh, s1mm] = start1.split(':')
  let [e1hh, e1mm] = end1.split(':')
  
  let [start2, end2] = event2
  let [s2hh, s2mm] = start2.split(':')
  let [e2hh, e2mm] = end2.split(':')

  let s1 = Number(s1hh) * 100 + Number(s1mm)
  let s2 = Number(s2hh) * 100 + Number(s2mm)
  let e1 = Number(e1hh) * 100 + Number(e1mm)
  let e2 = Number(e2hh) * 100 + Number(e2mm)
  // console.log('s1', s1, 's2', s2, 'e1', e1, 'e2', e2)

  if(s2 <= e1 && s1 <= e2) {
    return true
  }
  return false

  //   s1    e1 
  //      s2     e2



};