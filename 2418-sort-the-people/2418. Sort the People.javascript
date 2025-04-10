/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

  let nh = names.map((v,k) => [v, heights[k]])

  nh.sort((a,b) => {
    let [na,ha] = a
    let [nb,hb] = b
    if(ha < hb) {
      return 1
    } else {
      return -1
    }
  })

  let sortedNames = nh.map(v => v[0])
  return sortedNames
};