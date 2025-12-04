/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  // 1   2   3   4   5
  // 10  10
  //     20  20
  //     25  25  25  25
  // 10  55  45  25  25

  // 1   2   3   4   5
  // 10  10  -
  //     20  20  -
  //     25  25  25  25 -

  // 0   0   0   0   0
  // 10      -10
  //     20      -20
  //     25             -25

  let line = new Array(n+1).fill(0)

  for(let [s,e,seats] of bookings) {
    line[s]+=seats
    line[e+1]-=seats
  }

  let out = new Array(n).fill(0)
  let sum = 0
  for(let i = 0; i < n; i++) {
    sum+=line[i+1]
    out[i] = sum
  }
  return out

  // 10  55  45  25  25


};