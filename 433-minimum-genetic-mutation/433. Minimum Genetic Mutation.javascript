/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  bank = [startGene, ...bank]
  let bankset = new Set(bank)

  let adj = {}
  for(let gene of bank) {
    adj[gene] = []
  }   
  for(let gene of bank) {
    for(let i =0; i < gene.length; i++) {
      for(let base of 'ACGT') {
        let mut = gene.slice(0, i) + base + gene.slice(i+1)

        if(bankset.has(mut) && gene !== mut) {
          adj[gene].push(mut)
        }
      }
    }
  }

  if(startGene === endGene) return 0

  let visited = new Set([startGene])
  let queue = [[startGene, 1]]

  while(queue.length > 0) {
    let [u,steps] = queue.shift()

    for(let v of adj[u]) {
      if(visited.has(v)) continue
      if(v === endGene) return steps
      visited.add(v)
      queue.push([v, steps+1])
    }
  }
  return -1
};