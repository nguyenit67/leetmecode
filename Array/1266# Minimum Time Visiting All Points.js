/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  for (let iLoop = 1; iLoop < points.length; iLoop++) {
    const [prevX, prevY] = points[iLoop - 1];
    const [curX, curY] = points[iLoop];
    const xDist = Math.abs(prevX - curX);
    const yDist = Math.abs(prevY - curY);
    result +=  + Math.max(xDist, yDist);
  }
  return result;
};
