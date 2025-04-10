/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let total = 0
  let prev = 0
  for(let bracket of brackets) {
    let [upper, percent] = bracket
    if(prev > income) break;

    // 7 - 3
    let taxable = upper - prev
    if(income < upper) {
      taxable = income - prev
    }
    let taxes = taxable * percent / 100

    //
    total+=taxes

    prev = upper

  } 
  return total
};