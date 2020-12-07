/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const least = Math.max(...candies) - extraCandies;
  return candies.map(x => x >= least);
};