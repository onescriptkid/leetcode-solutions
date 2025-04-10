/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {

  // s abcde
  // g cdeab

  // s abcdeabcde
  // g   cdeab
  if(s.length !== goal.length) return false
  let dbl = s + s
  return dbl.includes(goal)
};