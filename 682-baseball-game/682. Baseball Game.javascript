/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let record = []
  for(let op of operations) {
    let num = Number(op)
    if(!Number.isNaN(num)) {
      record.push(num)
    } else if(op === '+') {
      let sum = record[record.length - 1] + record[record.length - 2]
      record.push(sum)
    } else if(op === 'D') {
      let dbl = record[record.length - 1] * 2
      record.push(dbl)
    } else if(op === 'C') {
      record.pop()
    }
  }

  let sum = 0
  for(let r of record) {
    sum+=r
  }
  return sum
};