
class MinStack {
    constructor() {
        this.stack = []
        this.minstack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minstack.length === 0) {
            this.minstack.push(val)
        } else {
            let min = Math.min(val, this.minstack[this.minstack.length -1])
            this.minstack.push(min)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minstack.pop()
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minstack[this.minstack.length - 1]
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */