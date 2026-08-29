/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if(source === target) return 0

  let stopsToBuses = new Map()   
  for(let bus = 0; bus < routes.length; bus++) {
    for(let stop of routes[bus]) {
      if(stopsToBuses.get(stop) === undefined) stopsToBuses.set(stop, new Set())
      stopsToBuses.get(stop).add(bus)
    }
  }

  let visitedBuses = new Set()
  let visitedStops = new Set([source])
  let queue = [[source, 1]]
  let qi = 0

  while(qi < queue.length) {
    let [stop, level] = queue[qi++]
    let buses = stopsToBuses.get(stop) 

    if(buses === undefined) continue

    for(let bus of buses) {
      if(visitedBuses.has(bus)) continue
      visitedBuses.add(bus)
      for(let stop of routes[bus]) {
        if(visitedStops.has(stop)) continue
        visitedStops.add(stop)
        if(stop === target) return level
        queue.push([stop, level+1])
      }
    }
  }
  return -1

};