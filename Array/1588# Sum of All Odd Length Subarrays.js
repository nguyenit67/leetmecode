const div2floor = x => x >> 1;
const div2plus1 = x => div2floor(x) + 1;

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let result = 0;
  const lastIndex = arr.length - 1;
  arr.forEach((value, index) => {
    
    for (let m = 0; m < 2; m++) {
      const seqsCnt =  div2plus1(index - m) * div2plus1( lastIndex -index - m );
      result += value * seqsCnt;
    }
  });

  return result;
};

