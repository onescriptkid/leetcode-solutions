/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
  let bulky = false
  if(length >= 10**4 || width >= 10**4 || height >= 10**4) {
    bulky = true
  }
  if(length * width * height >= 10**9) {
    bulky = true
  }

  let heavy = false
  if(mass >= 100) {
    heavy = true
  }


  if(heavy&& bulky) {
    return 'Both'
  }
  if(!heavy && !bulky) {
    return 'Neither'
  }
  if(heavy) {
    return 'Heavy'
  }
  if(bulky) {
    return 'Bulky'
  }
};