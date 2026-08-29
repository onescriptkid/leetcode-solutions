
var MinStack = function() {
  this.s0 = []  
  this.s1 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
  this.s0.push(value)
  if(this.s0.length === 0) {
    this.s1.push(value)
  } else {
    let min = Math.min(value, this.s1.at(-1) ?? value )
    this.s1.push(min)
  }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.s0.pop()
  this.s1.pop()
  return val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.s0.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.s1.at(-1)    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */