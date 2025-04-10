/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  let set = new Set()
  for(let edge of edges) {
    let [u,v] = edge
    if(set.has(u)) {
      return u
    }
    if(set.has(v)) {
      return v
    }
    set.add(u)
    set.add(v)
  }     
};