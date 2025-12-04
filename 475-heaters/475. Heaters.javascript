/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort((a,b) => a > b ? 1 : -1)
  houses.sort((a,b) => a > b ? 1  :-1)

  let radius = 0
  for(let house of houses) {
    let l = 0
    let r = heaters.length - 1
    let min = Infinity

    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = heaters[m]

      let diff = Math.abs(mid - house)
      min = Math.min(diff, min)

      if(diff === 0) break;
      if(mid < house) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
    radius = Math.max(radius, min)
  }
  return radius
};