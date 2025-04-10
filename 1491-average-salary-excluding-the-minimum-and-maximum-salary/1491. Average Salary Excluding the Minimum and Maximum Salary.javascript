/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {

  let min;
  let max;

  for(let i = 0; i < salary.length; i++) {
    let sal = salary[i]

    if(min === undefined) {
      min = sal
    } else if(sal < min) {
      min = sal
    }
    if(max === undefined) {
      max = sal
    } else if(sal > max) {
      max = sal
    }
  }

  let sum = 0;
  for(let i = 0; i < salary.length; i++) {
    let sal = salary[i]
    if(sal === min) {
      continue
    }
    if(sal === max) {
      continue
    }
    sum+=sal
  }

  let avg = sum /(salary.length - 2)
  return avg

};