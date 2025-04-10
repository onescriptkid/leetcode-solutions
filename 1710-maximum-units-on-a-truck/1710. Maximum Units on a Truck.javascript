/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {

  boxTypes.sort((a,b) => {
    if(a[1] > b[1]) {
      return 1
    } else {
      return -1
    }
  })   
  // console.log(boxTypes)
  //
  let totalboxes = 0
  let totalunits = 0
  while(totalboxes < truckSize && boxTypes.length !== 0) {
    let [boxes, units] = boxTypes.pop()
    // console.log('boxes', boxes, 'units', units, '  ', 'totalboxes', totalboxes)

    // 4
    // 1 boxes, 3 units
    // 1
    if( (totalboxes + boxes) <= truckSize) {
      totalboxes+=boxes
      totalunits+=(units * boxes)
    } else if( (totalboxes + boxes) > truckSize ) {
      let left = truckSize - totalboxes
      totalboxes+=left
      totalunits+=(units * left)
    }
  }
  return totalunits
};