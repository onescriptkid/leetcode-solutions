
var MyQueue = function() {
  this.s0 = []
  this.s1 = []   
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.s0.push(x)
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this.s1.length > 0) return this.s1.pop()

  while(this.s0.length > 0) {
    this.s1.push(this.s0.pop())
  }

  return this.s1.pop()
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.s1.length > 0) return this.s1[this.s1.length - 1]

  while(this.s0.length > 0) {
    this.s1.push(this.s0.pop())
  }

  return this.s1[this.s1.length - 1]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.s0.length === 0 && this.s1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */