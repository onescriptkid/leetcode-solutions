/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
   
   let i = 1; 
   let str = ""
   while(i <= n) {
       if(i === 1) {
           str = "1"
           i++
           continue;
       }
       
       let chunks = []
       let prevChar = ""
       for(let j = 0; j < str.length; j++) {
           let char = str[j]
           if(char === prevChar) {
               chunks[chunks.length - 1]+=char 
           } else {
               chunks.push(char)
           }
           prevChar = char; 
       }
       str = ""
       console.log(str, chunks) 
       for(let chunk of chunks) {
            let say = ""+chunk.length+chunk[0]
            str += say
       }
       
       i++
   }
    return str
};