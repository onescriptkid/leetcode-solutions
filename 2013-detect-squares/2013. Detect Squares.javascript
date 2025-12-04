
var DetectSquares = function() {
    this.points = []
    this.hash = {}
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  this.points.push(point)
  let key = `${point[0]},${point[1]}`
  this.hash[key] = (this.hash[key] || 0) + 1
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let [ix, iy] = point

  let count = 0
  // console.log(this.points)
  // console.log(this.hash)
  for (let [x, y] of this.points) {

    if(x === ix || y === iy) continue
    if(Math.abs(x - ix) !== Math.abs(y - iy)) {
      continue
    }
    let a = `${x},${iy}`
    let b = `${ix},${y}`
    count+=(this.hash[a] || 0) * (this.hash[b] || 0)
  } 
  return count
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */