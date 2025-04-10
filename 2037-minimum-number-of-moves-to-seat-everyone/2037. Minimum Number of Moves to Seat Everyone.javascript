/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {


   // 1 3 5    2 4 7
   // 1 1 2 


   // 1 4 5 9   1 2 3 6
   // 0 2 2 3

   seats.sort((a,b) => a > b ? 1 : -1)
   students.sort((a,b) => a > b ? 1 : -1)

   let out = 0
   for(let i = 0; i < seats.length; i++) {
    let diff = Math.abs(seats[i] - students[i])
    out+=diff
   }
   return out
};