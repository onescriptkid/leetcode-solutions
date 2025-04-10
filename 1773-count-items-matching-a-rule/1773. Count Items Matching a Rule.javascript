/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0
  for(let item of items) {
    let [t, c, n] = item
    if(ruleKey === 'type' && ruleValue === t) {
      count++
    }
    if(ruleKey === 'color' && ruleValue === c) {
      count++
    }
    if(ruleKey === "name" && ruleValue === n) {
      count++
    }
  }
  return count
};