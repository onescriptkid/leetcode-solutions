/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {

  // 1 2 3 4 5 6 7 8 9 10
  // x-------x
  //     x-------x
  //    x-------x
  //         x-------x
  // logs.sort((a,b) => a[0] > b[0] ? 1 : -1)
  let births = logs.map(v => v[0]).sort((a,b) => a > b ? 1 : -1)
  let deaths = logs.map(v => v[1]).sort((a,b) => a > b ? 1 : -1)
  // console.log('logs', logs)
  // console.log('births', births)
  // console.log('deaths', deaths)

  let max = 0
  let pop = 0
  let i = 0
  let j = 0

  while(i < births.length) {
    let birth = births[i]
    let death = deaths[j]
    if(birth < death) {
      pop++
      i++
    } else {
      pop--
      j++
    }
    // console.log('birth', birth, 'death', death, 'pop', pop, 'max', max)

    if(pop > max) {
      max = pop
    }
  }
  // console.log('max', max)

  let h = 0
  let k = 0
  let pop2 = 0
  while(h < births.length) {
    let birth = births[h]
    let death = deaths[k]
    if(birth < death) {
      pop2++
      h++
    } else {
      pop2--
      k++
    }
    if(pop2 === max) {
      return birth
    }
  }

};