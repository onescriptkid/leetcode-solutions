
var FreqStack = function() {
  // 5 5 4 4 3 5   
  // this.stacks
  // 1: [5,4,3]
  // 2: [5,4]
  // 3: [5]

  // this.counts
  // {5:3, 4:2, 3:1}
  this.stacks = {}
  this.counts = {}
  this.max = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  this.counts[val] = (this.counts[val] || 0) + 1
  let count = this.counts[val]

  if(this.stacks[count] === undefined) this.stacks[count] = []
  this.stacks[count].push(val)

  if(count > this.max) this.max = count
    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let stack = this.stacks[this.max]
  let val = stack.pop()
  this.counts[val]-- 

  if(stack.length === 0) this.max--
  return val
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */