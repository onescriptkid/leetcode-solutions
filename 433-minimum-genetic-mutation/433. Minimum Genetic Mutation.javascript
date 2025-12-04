/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
  //        x
  // AACCGGTT
  // AACCGGTA
  bank = [startGene, ...bank]
  let bankset = new Set(bank)

  let adj = {}
  for(let gene of bank) {
    adj[gene] = []
  }

  for(let i = 0; i < bank.length; i++) {
    let gene = bank[i]
    for(let j = 0; j < 8; j++) {
      for(let c of 'ACGT') {
        // Mutation is not the same as gene && bank has mutation
        mutation = gene.slice(0, j) + c + gene.slice(j+1)
        // console.log('gene', gene,'mutation', mutation)
        if(c !== gene[j] && bankset.has(mutation)) {
          adj[gene].push(mutation)
        }
      }
    }
  }
  // console.log('bankset', bankset)
  // console.log('adj', adj)

  let count = 1
  let queue = [startGene]
  let visited = new Set([startGene])

  while(queue.length > 0) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let gene = queue.shift()

      let mutations = []
      for(let mutation of adj[gene]) {
        if(mutation === endGene) return count
        if(visited.has(mutation)) continue
        visited.add(mutation)
        queue.push(mutation)
      }
    }
    count++
  }
  return -1

  // AACCGGTT : [AACCGGTA (1)]
  // AACCGGTA : [AACCGCTA (2), AACCGGTA (3)]
  // AACCGCTA : []
  // AAACGGTA :

  // console.log('adj', adj)
};