/**
 * @param {number[]} nums
 * @param {number[]} indexes
 * @return {number[]}
 */
var createTargetArray = function(nums, indexes) {
  const result = [];
  indexes.reduce((_, index, id) => {
      result.splice(index, 0, nums[id]);
  }, null);
  return result;
};
