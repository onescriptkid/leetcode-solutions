/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {

  let line = ''
  let linearr = []
  let out = []   
  for(let i = 0; i < words.length; i++) {
    let word = words[i]

    // 01234567891234567
    // This is an example
    
    // 01234567891234567
    // This    is    an
    // example

    // Check if adding word exceeds width 
    let exceed = false
    let testline = line
    if(testline === '') {
      testline+=word
    } else {
      testline+=' ' + word
    }
    if(testline.length > maxWidth) {
      exceed = true
    }
    // console.log('word', word, 'testline', testline)

    // Exceed width
    if(exceed) {
      // 0123456789123456
      // This is an  
      // Thisisan       6 
      let chunks = line.split(' ')
      let lengths = 0;
      chunks.forEach(chunk => lengths+=chunk.length)
      let totalspaces = maxWidth -lengths
      let linetopush = ''
      // 3 words, 8 word length, 8 space length,     16 
      if (chunks.length !== 1) {
        // let lengthperspace = Math.floor(totalspaces / (chunks.length - 1))

        // let lps = Math.ceil(totalspaces / (chunks.length - 1))
        // let rem = spacelength % (chunks.length - 1)


        // console.log('  ex', chunks, 'lengths', lengths, 'spacelength', spacelength, 'lps', lengthperspace)
        // 3 holes, 5 spaces   size=2
        // 2 holes, 3 spaces   size=2
        // 1 holes, 1 spaces   size=1

        // 01234567890123456789
        //                       3 holes
        //                xxxxx  5 spaces   1.8
        // acomputer.Artis
        // a computer. Art is
        // a  computer.  Art is

        let holes = chunks.length - 1
        let spacesleft = totalspaces / holes
        // console.log('  ex', chunks, 'lengths', lengths, 'totalspaces', totalspaces, 'holes', holes)


        for (let j = 0; j < chunks.length; j++) {
          let wordtopush = chunks[j]
          let holesize = Math.ceil(totalspaces / holes)
          // console.log('  holesize', holesize, `${totalspaces}/${holes}`)
          if (j === 0) {
            let spaces =  ' '.repeat(holesize)
            linetopush += wordtopush +  spaces
          } else if (j === chunks.length - 1) {
            linetopush += wordtopush
            //
          } else {
            let spaces = ' '.repeat(holesize)
            linetopush += wordtopush + spaces
          }
          totalspaces-=holesize
          holes--
        }
      } else {
        let spacestoadd = maxWidth - line.length
        let spaces = ' '.repeat(spacestoadd)
        linetopush = line+=spaces
      }
      // console.log('  ', linetopush)
      // console.log('')
      out.push(linetopush)
      line = ''
    }

    // Append to line
    if(line === '') {
      line+=word
    } else {
      line+=' ' + word
    }
  }

  if(line !== '') {
    let spacestoadd = maxWidth - line.length
    let spaces = ' '.repeat(spacestoadd)
    let linetopush = line + spaces
    out.push(linetopush)
  }


  return out
};