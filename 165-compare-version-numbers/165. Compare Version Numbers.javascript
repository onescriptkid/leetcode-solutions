/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  let max = Math.max(version1.length, version2.length)


  for(let i = 0; i < max; i++) {
    let r0 = Number(arr1[i] ?? 0)
    let r1 = Number(arr2[i] ?? 0)

    // if(arr1[i] === undefined && arr2[i] !== undefined) return 0

    if(r0 > r1) {
      return 1
    } 
    if(r0 < r1) {
      return -1
    }

  }

  return 0
  // 1.2.0
  // 1.2

  // [1,2]
  // [1,10]
  
  // [1,001]
  // [1,01]

  // [1,0,0,0]
  // [1,0]

};