/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  let srcset = new Set()
  for(let path of paths) {
    let [src, dest] = path
    srcset.add(src)
  }

  for(let path of paths) {
    let [src,dest] = path
    if(!srcset.has(dest)) {
      return dest
    }
  }
};