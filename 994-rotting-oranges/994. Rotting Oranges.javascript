/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
   

        // 1 1 0
        // 0 1 1
        // 0 1 2

        // [ [22, -1],[22]  ]
        let oranges = 0
        let e = grid
        let rows = e.length
        let cols = e[0].length
        let o = e
        let queue = []
        let adj = {}
        let visited = new Set()
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                //
                let rc = r+','+c
                if (o[r][c] === 2) {
                    queue.push([rc, -1])
                    visited.add(rc)
                }
                //
                adj[rc] = new Set()
                if(o?.[r]?.[c-1] !== undefined && o?.[r]?.[c-1] !== 0) {
                    let key = `${r},${c-1}`
                    adj[rc].add(key)
                }
                if(o?.[r]?.[c+1] !== undefined && o?.[r]?.[c+1] !== 0) {
                    let key = `${r},${c+1}`
                    adj[rc].add(key)
                }
                if(o?.[r-1]?.[c] !== undefined && o?.[r-1]?.[c] !== 0) {
                    let key = `${r-1},${c}`
                    adj[rc].add(key)
                }
                if(o?.[r+1]?.[c] !== undefined && o?.[r+1]?.[c] !== 0) {
                    let key = `${r+1},${c}`
                    adj[rc].add(key)
                }
                if(o[r][c]) oranges++
            }
        }

        // console.log('adj', adj)
        // console.log('queue', queue)
        // console.log('oranges', oranges)

        let prev
        let level = 0
        while(queue.length > 0) {
            let qlength = queue.length
            let i = 0
            // console.log('queue', queue, 'level', level)
            while(i < qlength) {
                let [curr, parent] = queue.shift()
                // console.log("  curr", curr, 'parent', parent, 'prev', prev)
                // let [r,c] = curr.split(",")
                // if(e[r][c] === 1) {
                //     e[r][c] = 2
                //     total++
                // }

                for(let edge of adj[curr]) {
                    if(edge === parent) continue
                    if(visited.has(edge)) continue
                    visited.add(edge)
                    queue.push([edge, curr])
                }
                prev = curr
                i++
            }

            if(queue.length === 0) break;

            level++
        }

        if(visited.size !== oranges) {
            return -1
        }
        return level
    } 
