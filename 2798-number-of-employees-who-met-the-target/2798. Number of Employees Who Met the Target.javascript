/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {

 let count = 0

 for(let i = 0; i < hours.length; i++) {
  let hour = hours[i]
  if(hour >= target) count++
 }   
 return count
};