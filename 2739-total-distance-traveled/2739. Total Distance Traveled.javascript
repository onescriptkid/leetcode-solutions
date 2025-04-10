/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {

  // let addfuel = Math.floor(mainTank / 5)
  // let fuel = mainTank + addfuel

  let total = 0
  let i = 0
  let addfuel = 0
  while(mainTank > 0) {
    // console.log('main', mainTank, 'at', additionalTank, 'addfuel', addfuel)
    mainTank--
    addfuel++
    if(additionalTank !== 0 && addfuel === 5) {
      addfuel = 0 
      mainTank++
      additionalTank--
    }
    total++
  }
  // console.log(total)
  // 5 + 1
  // 5 * 10 + 1 * 10
  // 60
  return total * 10
};