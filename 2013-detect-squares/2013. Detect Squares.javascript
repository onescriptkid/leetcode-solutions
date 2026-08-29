
var DetectSquares = function() {
  this.map = new Map()
  this.points = []
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  let [x,y] = point
  let key = `${x},${y}`
  this.map.set(key, (this.map.get(key) || 0) + 1  )
  this.points.push(point)
    
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
  let [ix,iy] = point

  let count = 0
  for(let [x,y] of this.points) {
    if(x === ix || y === iy) continue
    if(Math.abs(x - ix) !== Math.abs(y - iy)) continue

    let a = `${x},${iy}`
    let b = `${ix},${y}`

    count+=(this.map.get(a) || 0) * (this.map.get(b) || 0)
  }
  return count
  // [11,10] and [3,10]
  // 


  // [11,10]=count
  // [3,10]
  // [11,2]
  // [3,2]
    
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */