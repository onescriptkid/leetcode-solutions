
var RecentCounter = function() {
    this.req = []
    this.start = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.req.push(t)
    // [1, 100,3001, 3002]    

    let threshold = t - 3000
    while(this.req[this.start] < threshold) {
        this.start+=1
    }
    return this.req.length - this.start

};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */