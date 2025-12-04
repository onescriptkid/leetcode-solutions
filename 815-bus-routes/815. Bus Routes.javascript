/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  // Don't get on bus if already there
  if(source === target) return 0

  // Map stops to buses to bfs on stop -> bus -> stop
  let stopsToBuses = new Map() 
  for(let bus = 0; bus < routes.length; bus++) {
    for(let stop of routes[bus]) {
      if(stopsToBuses.get(stop) === undefined) stopsToBuses.set(stop, new Set())
      stopsToBuses.get(stop).add(bus)
    }
  }

  // Double visited sets to prevent revisiting same bus and stop
  let visitedStops = new Set([source])
  let visitedBuses = new Set([])

  // Start at source
  let queue = [[source, 1]]
  let out = -1

  // qi instead of shift() for better performance  
  let qi = 0


  while(qi < queue.length) {
    let [stop, level] = queue[qi++]

    // If we're at a stop, see which buses we can get on
    let buses = stopsToBuses.get(stop)
    if(stopsToBuses.get(stop) === undefined) continue


    // For all the buses we can get on, walk over all the stops we can get to
    for(let bus of buses) {

      // Already got on this bus, skip
      if(visitedBuses.has(bus)) continue
      visitedBuses.add(bus)

      // For all the stops, if we've already visited the stop or the level is greater than our buses taken(out). skip
      for(let stop of routes[bus]) {
        if(visitedStops.has(stop)) continue
        if(stop === target) return level
        visitedStops.add(stop)
        queue.push([stop, level+1])
      }
    }
  }

  return out


};