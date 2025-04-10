/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = (''+digits).split('');
    let curr = [];
    let letters = { 2 :['a','b','c'],
                   3 : ['d','e','f'],
                   4 : ['g','h','i'],
                   5 : ['j','k','l'],
                   6 : ['m','n','o'],
                   7 : ['p','q','r','s'],
                   8 : ['t','u','v'],
                   9 : ['w','x','y','z'] }
    for(let i = 0; i < arr.length; i++) {
        var next = [];
        let number = arr[i]
        if(curr.length == 0) {
            letters[number].forEach(l => {next.push(l);})
        } else {
            letters[number].forEach( l => {
                curr.forEach(str => {
                    next.push(str+l);
                });
            });
        }
        curr = next.slice(0);
    }
    
    return curr;
};