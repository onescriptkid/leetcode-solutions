/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {

  let arr = [[1,0,0]]   
  let min = Infinity
  while(arr.length > 0) {
    let [s,p,l] = arr.shift()
    // console.log('s p l', s, p, l, '-', min)
    if(min <= l) continue
    if(target === p) min = l

    // A
    arr.push([2*s, p+s, l+1])

    if(s < 0 && p+s < target) {
      arr.push([1,p,l+1])
    }
    if(s > 0 && p+s > target) {
      arr.push([-1,p,l+1])
    }
  }
  return min
};