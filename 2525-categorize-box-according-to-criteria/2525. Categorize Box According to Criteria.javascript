/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
  let isBulky = false
  if(length >= 10 ** 4 || width >= 10 ** 4 || height >= 10 ** 4 || length * width * height >= 10 ** 9) {
    isBulky = true
  }

  let isHeavy = false
  if(mass >=100) {
    isHeavy = true
  }

  if(isHeavy && isBulky) return "Both"
  if(isHeavy && !isBulky) return "Heavy"
  if(!isHeavy && isBulky) return "Bulky"
  return "Neither"
};