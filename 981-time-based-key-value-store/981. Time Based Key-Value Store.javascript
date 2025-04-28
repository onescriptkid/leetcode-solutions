
var TimeMap = function() {
           this.keyStore = new Map(); 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
            // console.log('set', key, value, timestamp)
        //
        if(this.keyStore.has(key)) {
            let arr = this.keyStore.get(key)
            arr.push([timestamp, value])
        } else {
            this.keyStore.set(key, [[timestamp, value]])
        }
        // console.log('set', key, value,timestamp, this.keyStore)

};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
            // console.log('get', key, timestamp, this.keyStore)
        let arr = this.keyStore.get(key)
        if(arr === undefined) return ""
        //  0 1 2 3 4 5
        //  0 2 4 6 8 10
        //  l   m     r

        let l =  0
        let r = arr.length -1
        let out = ""
        // console.log('arr', arr)
        while(l <= r) {
            let m = Math.floor((l + r) / 2)
            // console.log('lmr', l, m ,r, '-', arr[m])
            let [time, value] = arr[m]
            if(time <= timestamp) {
                out = value
            }
            if(time === timestamp) {
                return value
            }
            if(time < timestamp) {
               l = m + 1 
            }
            if(time > timestamp) {
                r = m - 1
            }
        }

        return out
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */