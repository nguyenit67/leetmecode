/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(allsum));
};

function allsum(arr) {
    return arr.reduce((x, y) => x + y, 0);
}