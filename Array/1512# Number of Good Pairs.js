/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const counter = Array(101).fill(0);
  let result = 0;
  for (const x of nums) {
    result += counter[x];
    counter[x]++;
  }
  return result;
};