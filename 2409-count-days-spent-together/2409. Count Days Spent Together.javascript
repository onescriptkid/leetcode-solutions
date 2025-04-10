/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

  // 15, 16, 17, 18
  //     16, 17, 18, 19
  let daysinmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Set alice dates
  let [arriveMonth, arriveDay] = arriveAlice.split('-') 
  let [leaveMonth, leaveDay] = leaveAlice.split('-') 

  arriveDay = Number(arriveDay)
  arriveMonth = Number(arriveMonth)
  leaveDay = Number(leaveDay)
  leaveMonth = Number(leaveMonth)

  let aliceDays = new Set()
  // console.log('before', arriveDay, leaveDay, arriveMonth, leaveMonth)
  while(arriveDay !== leaveDay || arriveMonth !== leaveMonth) {
    aliceDays.add(`${arriveMonth}-${arriveDay}`)
    let lastDay = daysinmonth[arriveMonth - 1]
    if(arriveDay !== lastDay) {
      arriveDay++
    } else {
      arriveDay = 1
      arriveMonth++
    }
    // console.log(arriveDay, arriveMonth, lastDay)
  }
  aliceDays.add(`${arriveMonth}-${arriveDay}`)
  // console.log('after')

  // check for overlap
  let [arriveMonth2, arriveDay2] = arriveBob.split('-')
  let [leaveMonth2, leaveDay2] = leaveBob.split('-')

  arriveDay2 = Number(arriveDay2)
  arriveMonth2 = Number(arriveMonth2)
  leaveDay2 = Number(leaveDay2)
  leaveMonth2 = Number(leaveMonth2)

  let count = 0
  // console.log(aliceDays)
  while(arriveDay2 !== leaveDay2 || arriveMonth2 !== leaveMonth2) {

    let day = `${arriveMonth2}-${arriveDay2}`
    // console.log(day)
    if(aliceDays.has(day)) {
      count++
    }

    let lastDay = daysinmonth[arriveMonth2 - 1]
    if(arriveDay2 !== lastDay) {
      arriveDay2++
    } else {
      arriveDay2 = 1
      arriveMonth2++
    }
  }
    let day = `${arriveMonth2}-${arriveDay2}`
    // console.log(day)
    if(aliceDays.has(day)) {
      count++
    }  
  // console.log(aliceDays)
  return count

};