/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let d1 = 0
  for(let i = start; i !== destination; i = (i + 1) % distance.length) {
    let d = distance[i]
    d1 = d1 + d
    // console.log('a', i)
  }

  let d2 = 0
  let i = destination
  while(i !== start) {
    let d = distance[i]
    d2+=d
    i = (i + 1) % distance.length
    // console.log('b', i)
  }
  // console.log(d1, d2)
  return Math.min(d1, d2)
};