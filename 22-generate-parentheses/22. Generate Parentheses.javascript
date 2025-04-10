/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    function backtrack(openN, closedN, n, res, stack) {
        if (openN === closedN && openN === n) {
            res.push(stack);
            return;
        }

        if (openN < n) {
            backtrack(openN + 1, closedN, n, res, stack + '(');
        }
        if (closedN < openN) {
            backtrack(openN, closedN + 1, n, res, stack + ')');
        }
    }


        const res = [];
        backtrack(0, 0, n, res, '');
        return res;
    
};