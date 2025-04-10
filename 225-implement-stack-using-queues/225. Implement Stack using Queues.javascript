
var MyStack = function() {
   this.q1 = []
   this.q2 = [] 

   this.q3 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q3.push(x)
  // stack [a b c d]
  //              x
  // queue [a b c d]
  // queue []
  // this.q1.push(x)

  // [d]
  // [a b c]
  
  // [d]
  // [a b c]
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  // [a b c d]
  // console.log('pop', this.q3)
  let length = this.q3.length
  for(let i = 0 ; i < length - 1; i++) {
    this.q3.push(this.q3.shift())
  }
  let out = this.q3.shift()
  // console.log(' - ', this.q3, out)
  return out
  // this.q3.push(e)
  // console.log('pop', this.q1, this.q2)
  // let q1length = this.q1.length
  // for(let i = 0; i < q1length - 1; i++) {
  //   this.q2.push(this.q1.shift())
  // } 

  // let out = this.q1.shift()
  
  // let q2length = this.q2.length;
  // for(let i = 0; i < q2length; i++) {
  //   this.q1.push(this.q2.shift())
  // }
  // return out
  
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  // console.log('top', this.q3)
  let q3length = this.q3.length
  for(let i = 0; i < q3length-1; i++) {
    this.q3.push(this.q3.shift())
  } 
  let top = this.q3.shift()
  this.q3.push(top)
  // console.log(' - ', this.q3)
  // [a b c]
  // [c a b]
  return top
  // console.log('top', this.q1, this.q2)
  // let q1length = this.q1.length
  // for(let i = 0; i < q1length - 1; i++) {
  //   this.q2.push(this.q1.shift())
  // } 

  // let out = this.q1.shift()

  // this.q2.push(out)
  // let q2length = this.q2.length
  // for(let i = 0; i < q2length; i++) {
  //   this.q1.push(this.q2.shift())
  // }

  // return out
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q3.length === 0   
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */